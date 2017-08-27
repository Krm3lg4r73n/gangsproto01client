import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import network, {
  networkConnectEpic,
  networkDisconnectEpic,
  networkSendDataEpic,
  networkReceiveDataEpic,
  testEpic,
} from './network';
import message, { messageSendEpic } from './message';
import navigation from './navigation';
import login from './login';

export const rootReducer = combineReducers({
  network,
  message,
  navigation,
  login,
});

export const rootEpic = combineEpics(
  networkConnectEpic,
  networkDisconnectEpic,
  networkSendDataEpic,
  networkReceiveDataEpic,
  testEpic,
  messageSendEpic,
);
