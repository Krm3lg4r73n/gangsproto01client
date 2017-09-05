import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import network, {
  networkConnectEpic,
  networkDisconnectEpic,
  networkSendDataEpic,
  networkReceiveDataEpic,
} from './network';
import message, { messageSendEpic } from './message';
import login, { loginEpic, testEpic } from './login';
import navigation from './navigation';
import { joinWorldEpic, createWorldEpic } from './world';
import player, { createPlayerEpic } from './player';

export const rootReducer = combineReducers({
  network,
  message,
  navigation,
  login,
  player,
});

export const rootEpic = combineEpics(
  networkConnectEpic,
  networkDisconnectEpic,
  networkSendDataEpic,
  networkReceiveDataEpic,
  messageSendEpic,
  loginEpic,
  testEpic,
  joinWorldEpic,
  createWorldEpic,
  createPlayerEpic,
);
