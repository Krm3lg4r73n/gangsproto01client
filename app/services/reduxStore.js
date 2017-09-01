import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { rootEpic, rootReducer } from '../dux';
import network from './network';

const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies: network });

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8081 });
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(epicMiddleware, thunk)),
);
