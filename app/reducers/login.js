import { LOGIN_STARTED, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/login';

const initialState = {
  connecting: false,
  errorMessage: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        connecting: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        connecting: false,
        errorMessage: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        connecting: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}
