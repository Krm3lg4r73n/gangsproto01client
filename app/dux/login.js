import { Observable } from 'rxjs';
import { navigate } from './navigation';
import { networkConnect, networkDisconnect, CONNECTED } from './network';
import { MSG_RECEIVE, messageSend } from './message';
import { Msg } from '../services/messaging';
import { sendMsgObs } from '../services/observables';

export const LOGIN_EXECUTE = 'gangsclient/login/EXECUTE';
export const LOGIN_SUCCESS = 'gangsclient/login/SUCCESS';
export const LOGIN_ERROR = 'gangsclient/login/ERROR';

const initialState = {
  inProgress: false,
  errorMessage: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_EXECUTE:
      return {
        ...state,
        inProgress: true,
        errorMessage: null,
      };
    case LOGIN_SUCCESS:
      return initialState;
    case LOGIN_ERROR:
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
  return { type: LOGIN_EXECUTE, payload: { host, username } };
}

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

export function loginError(error) {
  let errorMessage;
  if (error instanceof Error) errorMessage = error.message;
  else errorMessage = error.description;
  return { type: LOGIN_ERROR, payload: errorMessage };
}

export const loginEpic = (action$, store) =>
  action$.ofType(LOGIN_EXECUTE).switchMap((action) => {
    const { host, username } = action.payload;
    const connectDispatch$ = Observable.of(networkDisconnect(), networkConnect(host));
    const loginDispatch$ = Observable.of(
      messageSend(Msg.ServerReset.create()),
      messageSend(Msg.User.create({ name: username })),
    );
    const successDispatch$ = Observable.of(navigate('enterWorld')).concat(
      Observable.of(loginSuccess()).delay(100),
    );

    const loginResult$ = action$.ofType(MSG_RECEIVE).take(1).mergeMap(({ payload }) => {
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

export const testEpic = (action$, store) =>
  action$.ofType(MSG_RECEIVE).do(action => console.log(action)).switchMapTo(Observable.empty());
