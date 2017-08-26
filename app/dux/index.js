import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import network, { connectEpic } from './network';
import login from './login';
import navigation from './navigation';

export const rootEpic = combineEpics(connectEpic);

export const rootReducer = combineReducers({
  navigation,
  network,
  login,
});
