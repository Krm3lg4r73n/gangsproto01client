import { createStore } from 'redux'
import reducer from '../reducers';

const setupStore = () => {
  return createStore(reducer);
};

export default setupStore;
