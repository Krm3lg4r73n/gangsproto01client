import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../app/reducers';

export default createStore(reducer, applyMiddleware(thunk));
