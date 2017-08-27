import { encode } from '../services/messaging';
import { networkSendData } from './network';

const SEND = 'gangsclient/message/SEND';
const RECEIVE = 'gangsclient/message/RECEIVE';

const initialState = {
  lastSend: null,
  lastReceived: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEND:
      return { ...state, lastSend: action.payload };
    case RECEIVE:
      return { ...state, lastReceived: action.payload };
    default:
      return state;
  }
}

export function messageSend(message) {
  return { type: SEND, payload: message };
}

export function messageReceive(message) {
  return { type: RECEIVE, payload: message };
}

export const messageSendEpic = action$ =>
  action$.ofType(SEND).map(action => networkSendData(encode(action.payload)));
