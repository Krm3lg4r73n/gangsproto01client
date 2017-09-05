import { encode } from '../services/messaging';
import { networkSendData } from './network';

export const MSG_SEND = 'gangsclient/message/SEND';
export const MSG_RECEIVE = 'gangsclient/message/RECEIVE';

const initialState = {
  lastSend: null,
  lastReceived: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MSG_SEND:
      return { ...state, lastSend: action.payload.msg };
    case MSG_RECEIVE:
      return { ...state, lastReceived: action.payload.msg };
    default:
      return state;
  }
}

export function messageSend(message) {
  return { type: MSG_SEND, payload: { msgType: message.constructor.name, msg: message } };
}

export function messageReceive(message) {
  return { type: MSG_RECEIVE, payload: { msgType: message.constructor.name, msg: message } };
}

export const messageSendEpic = action$ =>
  action$.ofType(MSG_SEND).map(action => networkSendData(encode(action.payload.msg)));
