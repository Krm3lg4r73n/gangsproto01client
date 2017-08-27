import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { rootEpic, rootReducer } from '../dux';
import network from './network';

const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies: network });

export default createStore(rootReducer, applyMiddleware(epicMiddleware, thunk));
