import Login from '../../lib/Login';
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
function loginError(errorMessage) {
  return { type: LOGIN_ERROR, errorMessage };
}

export function login(host, username) {
  return (dispatch) => {
    dispatch(loginStarted());
    Login.login({ host, username })
      .then(() => dispatch(navigate('some', { name: username })))
      .then(() => setTimeout(() => dispatch(loginSuccess()), 500))
      .catch(error => dispatch(loginError(error)));
  };
}
