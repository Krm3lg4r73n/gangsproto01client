import { Observable } from 'rxjs';
import { navigate } from './navigation';
import { networkConnect, networkDisconnect, CONNECTED } from './network';
import { messageSend, RECEIVE } from './message';
import { Msg } from '../services/messaging';

const LOGIN = 'gangsclient/login/LOGIN';
const SUCCESS = 'gangsclient/login/SUCCESS';
const ERROR = 'gangsclient/login/ERROR';

const initialState = {
  inProgress: false,
  errorMessage: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        inProgress: true,
        errorMessage: null,
      };
    case SUCCESS:
      return {
        ...state,
        inProgress: false,
        errorMessage: null,
      };
    case ERROR:
      return {
        ...state,
        inProgress: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export function login(host, username) {
  return { type: LOGIN, payload: { host, username } };
}

export function loginSuccess() {
  return { type: SUCCESS };
}

export function loginError(error) {
  let errorMessage;
  if (error instanceof Error) errorMessage = error.message;
  else errorMessage = error.description;
  return { type: ERROR, payload: errorMessage };
}

export const loginEpic = (action$, store) => {
  const { login } = store.getState();

  return action$.ofType(LOGIN).filter(() => !login.inProgress).switchMap((action) => {
    const { host, username } = action.payload;
    const userMsg = Msg.User.create({ name: username });

    const connectDispatch$ = Observable.of(networkDisconnect(), networkConnect(host));
    const loginDispatch$ = Observable.of(messageSend(userMsg));
    const successDispatch$ = Observable.of(navigate('world')).concat(
      Observable.of(loginSuccess()).delay(500),
    );

    const loginResult$ = action$.ofType(RECEIVE).take(1).mergeMap(({ payload }) => {
      switch (payload.msg.constructor) {
        case Msg.Ok:
          return successDispatch$;
        case Msg.Error:
          return Observable.of(loginError(payload.msg));
      }
    });

    return connectDispatch$.merge(
      action$.ofType(CONNECTED).switchMapTo(loginDispatch$.merge(loginResult$)),
    );
  });
};

export const testEpic = (action$, store) =>
  action$.ofType(RECEIVE).do(action => console.log(action)).switchMapTo(Observable.empty());
