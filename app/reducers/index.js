import { combineReducers } from 'redux';
import navigation from './navigation';
import login from './login';

const combinedReducers = combineReducers({
  navigation,
  login,
});

export default combinedReducers;
