import reduxStore from './reduxStore';
import {
  networkConnected,
  networkError,
  networkDisconnected,
  networkReceiveData,
} from '../dux/network';

const socket = null;

export const connect = (host) => {
  socket = new WebSocket(`ws://${host}`);
  socket.binaryType = 'arraybuffer';

  socket.onopen = () => {
    socket.onopen = null;
    socket.onmessage = event => reduxStore.dispatch(networkReceiveData(event.data));
    socket.onerror = event => reduxStore.dispatch(networkError(event.message));
    socket.onclose = event => reduxStore.dispatch(networkDisconnected());
    reduxStore.dispatch(networkConnected());
  };

  socket.onclose = (event) => {
    socket = null;
    reduxStore.dispatch(networkError(event.message));
  };

  // .switchMap(action =>
  //   Observable.defer(() => User.login(action.payload))
  //     .retry(1)
  //     .mergeMapTo(Observable.of(navigate('world'), networkConnected()))
  //     .catch(err => Observable.of(networkError(err))),
  // );
};

export const disconnect = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
};

export const send = (data) => {
  if (socket) {
    socket.send(data);
  }
};
