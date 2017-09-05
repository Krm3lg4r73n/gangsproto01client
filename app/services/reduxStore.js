import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { rootEpic, rootReducer } from '../dux';
import network from './network';

const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies: network });

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8081 });
let enhancer = applyMiddleware(epicMiddleware, thunk);
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) { enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(enhancer); }
export default createStore(rootReducer, enhancer);
