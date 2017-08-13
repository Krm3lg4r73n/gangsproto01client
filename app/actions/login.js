import Network from '../../lib/Network';
import User from '../../lib/User';
import { navigate } from './navigation';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

function loginStarted() {
  return { type: LOGIN_STARTED };
}
function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}
function loginError({ type: errorType, description }) {
  return { type: LOGIN_ERROR, errorMessage: errorType };
}

export function login(host, username) {
  return (dispatch) => {
    dispatch(loginStarted());
    User.login({ host, username })
      .then(() => dispatch(navigate('world')))
      .then(() => setTimeout(() => dispatch(loginSuccess()), 500))
      .catch(error => dispatch(loginError(error)));
  };
}

export function logout() {
  return dispatch => Network.disconnect();
}
