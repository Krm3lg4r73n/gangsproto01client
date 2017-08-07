import { combineReducers } from 'redux';
import navigation from './navigation';

const initalState = {
  text: 'bla',
  socketConnected: false,
  socket: null,
};

const testReducer = (state=initalState, action) => {
  switch(action.type) {
    case 'SOCKET_CONNECTED':
      return {
        ...state,
        socketConnected: true,
        socket: action.socket,
      };
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  navigation,
  test: testReducer,
});

export default combinedReducers;
