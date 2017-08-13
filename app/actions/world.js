import { navigate } from './navigation';
import showError from '../services/showError';
import World from '../../lib/World';

export function joinWorld(key) {
  return (dispatch) => {
    World.joinWorld(key)
      .then(worldId => dispatch(navigate('debug', { text: worldId })))
      .catch(error => showError(error));
  };
}

export function createWorld(key) {
  return (dispatch) => {
    World.createWorld(key)
      .then(worldId => dispatch(navigate('debug', { text: worldId })))
      .catch(error => showError(error));
  };
}
