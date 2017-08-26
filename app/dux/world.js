import showError from '../services/showError';
import World from '../../lib/World';
import { navigate } from './navigation';

export function joinWorld(key) {
  return (dispatch) => {
    World.join(key).catch(error => showError(error));
  };
}

export function createWorld(key) {
  return (dispatch) => {
    World.create(key).catch(error => showError(error));
  };
}
