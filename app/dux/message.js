import { encode } from '../services/messaging';
import { networkSendData } from './network';

export const SEND = 'gangsclient/message/SEND';
export const RECEIVE = 'gangsclient/message/RECEIVE';

const initialState = {
  lastSend: null,
  lastReceived: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEND:
      return { ...state, lastSend: action.payload.msg };
    case RECEIVE:
      return { ...state, lastReceived: action.payload.msg };
    default:
      return state;
  }
}

export function messageSend(message) {
  return { type: SEND, payload: { msgType: message.constructor.name, msg: message } };
}

export function messageReceive(message) {
  return { type: RECEIVE, payload: { msgType: message.constructor.name, msg: message } };
}

export const messageSendEpic = action$ =>
  action$.ofType(SEND).map(action => networkSendData(encode(action.payload.msg)));
