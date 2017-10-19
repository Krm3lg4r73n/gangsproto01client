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
import location, { updateLocationEpic } from './location';
import devServer, { devServerEpic } from './devServer';
import scene from './scene';

export const rootReducer = combineReducers({
  network,
  message,
  navigation,
  login,
  player,
  location,
  devServer,
  scene,
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
  updateLocationEpic,
  devServerEpic,
);
