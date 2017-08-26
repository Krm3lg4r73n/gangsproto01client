import Network from '../../lib/Network';
import User from '../../lib/User';
import { navigate } from './navigation';

const STARTED = 'gangsclient/login/STARTED';
const SUCCESS = 'gangsclient/login/SUCCESS';
const ERROR = 'gangsclient/login/ERROR';

const initialState = {
  connecting: false,
  errorMessage: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STARTED:
      return {
        ...state,
        connecting: true,
      };
    case SUCCESS:
      return {
        ...state,
        connecting: false,
        errorMessage: null,
      };
    case ERROR:
      return {
        ...state,
        connecting: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

function loginStarted() {
  return { type: STARTED };
}
function loginSuccess() {
  return { type: SUCCESS };
}
function loginError(error) {
  let errorMessage;
  if (error instanceof Error) errorMessage = error.message;
  else errorMessage = error.description;
  return { type: ERROR, errorMessage };
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
  return (dispatch) => {
    Network.disconnect();
    dispatch(navigate('login'));
  };
}
