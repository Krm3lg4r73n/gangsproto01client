const CONNECT = 'gangsclient/network/CONNECT';
const CONNECTED = 'gangsclient/network/CONNECTED';
const DISCONNECTED = 'gangsclient/network/DISCONNECTED';
const ERROR = 'gangsclient/network/ERROR';
const MESSAGE = 'gangsclient/network/ERROR';

const initialState = {
  connected: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONNECTED:
      return { ...state, connected: true };
    default:
      return state;
  }
}

export function connect(host, username) {
  return { type: CONNECT, payload: { host, username } };
}

export function connected() {
  return { type: CONNECTED };
}

export function disconnected() {
  return { type: DISCONNECTED };
}

export function error(error) {
  return { type: ERROR, payload: error };
}

export function message(message) {
  return { type: MESSAGE, payload: message };
}

export const connectEpic = action$ => action$.ofType(CONNECT).delay(1000).mapTo(connected());
