import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const setupStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export default setupStore;
