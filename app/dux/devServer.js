import { Observable } from 'rxjs';
import { navigate } from './navigation';
import { MSG_SEND, messageReceive } from './message';
import { loginSuccess } from './login';
import { initWorld } from '../services/devServer';
import { Msg } from '../services/messaging';

export const DEV_SERVER_LOGIN = 'gangsclient/devServer/LOGIN';
export const DEV_SERVER_TEST = 'gangsclient/devServer/TEST';

const initialState = {
  enabled: false,
  test: 0,
  player: {
    name: 'Aris',
  },
  currentLocation: {
    name: 'Bar zum Alten Seebär',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DEV_SERVER_LOGIN:
      return { ...state, enabled: true };
    case DEV_SERVER_TEST:
      return { ...state, test: state.test + 1 };
    default:
      return state;
  }
}

export function devServerLogin(username) {
  return { type: DEV_SERVER_LOGIN, payload: username };
}

export function devServerTest() {
  return { type: DEV_SERVER_TEST };
}

const loginEpic = login$ =>
  login$.switchMapTo(
    Observable.merge(
      Observable.of(navigate('enterWorld')).concat(Observable.of(loginSuccess()).delay(100)),
      Observable.interval(1000).mergeMapTo(Observable.of(devServerTest())),
    ),
  );

const msgToGenerator = {
  WorldJoin: initWorld,
  WorldCreate: initWorld,
};

const messageEpic = (send$, store) =>
  send$.switchMap(({ payload }) => {
    const generator = msgToGenerator[payload.msg.constructor.name];
    if (!generator) return Observable.empty();
    // delay(0) gives other epics one frame to register receive handlers
    return generator(store.getState().devServer).delay(0);
  });

export function devServerEpic(action$, store) {
  return action$
    .filter(() => store.getState().devServer.enabled)
    .groupBy(action => action.type)
    .mergeMap((obs) => {
      switch (obs.key) {
        case DEV_SERVER_LOGIN:
          return loginEpic(obs);
        // case DEV_SERVER_TEST:
        //   return obs.switchMap((action) => {
        //     const count = store.getState().devServer.test;
        //     return Observable.of(
        //       messageReceive(Msg.LocationUpdate.create({ name: `Location${count}` })),
        //     );
        //   });
        case MSG_SEND:
          return messageEpic(obs, store);
        default:
          return Observable.empty();
      }
    });
}
