import { Observable } from 'rxjs';
import { connect, disconnect, send } from '../services/network';
import { decode, Msg } from '../services/messaging';
import { messageReceive, messageSend } from './message';

const CONNECT = 'gangsclient/network/CONNECT';
const CONNECTED = 'gangsclient/network/CONNECTED';
const DISCONNECT = 'gangsclient/network/DISCONNECTED';
const DISCONNECTED = 'gangsclient/network/DISCONNECTED';
const ERROR = 'gangsclient/network/ERROR';
const SEND_DATA = 'gangsclient/network/SEND_DATA';
const RECEIVE_DATA = 'gangsclient/network/RECEIVE_DATA';

const initialState = {
  host: null,
  connecting: false,
  connected: false,
  errorMessage: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONNECT:
      return {
        ...initialState,
        connecting: true,
        host: action.payload,
      };
    case CONNECTED:
      return { ...state, connecting: false, connected: true };
    case ERROR:
      return { ...initialState, errorMessage: action.payload };
    default:
      return state;
  }
}

export function networkConnect(host) {
  return { type: CONNECT, payload: host };
}

export function networkConnected() {
  return { type: CONNECTED };
}

export function networkDisconnect() {
  return { type: DISCONNECT };
}

export function networkDisconnected() {
  return { type: DISCONNECTED };
}

export function networkError(error) {
  return { type: ERROR, payload: JSON.stringify(error) };
}

export function networkSendData(data) {
  return { type: SEND_DATA, payload: data };
}

export function networkReceiveData(data) {
  return { type: RECEIVE_DATA, payload: data };
}

export const networkConnectEpic = action$ =>
  action$.ofType(CONNECT).do(action => connect(action.payload)).switchMapTo(Observable.empty());

export const networkDisconnectEpic = action$ =>
  action$.ofType(DISCONNECT).do(action => disconnect()).switchMapTo(Observable.empty());

export const networkSendDataEpic = action$ =>
  action$.ofType(SEND_DATA).do(action => send(action.payload)).switchMapTo(Observable.empty());

export const networkReceiveDataEpic = action$ =>
  action$.ofType(RECEIVE_DATA).map(action => messageReceive(decode(action.payload)));

export const testEpic = action$ =>
  action$.ofType(CONNECTED).mapTo(
    messageSend(
      Msg.User.create({
        name: 'David',
      }),
    ),
  );
