import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export default function setupStore() {
  return createStore(reducer, applyMiddleware(thunk));
}
