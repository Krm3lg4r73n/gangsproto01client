import showError from '../services/showError';
import Player from '../../lib/Player';
import { navigate } from './navigation';

export function requestPlayer() {
  return (dispatch) => {
    Player.request()
      .then(player => dispatch(navigate('debug', { text: String(player) })))
      .catch(error => showError(error));
  };
}
