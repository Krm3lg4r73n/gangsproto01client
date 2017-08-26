import Network from './Network';
import { Message, Messaging } from './Messaging';
import { navigate } from '../app/dux/navigation';

class World {
  _sendCreateMessage(key) {
    const msg = Message.WorldCreate.create({ key });
    Network.send(Messaging.encode(msg));
  }
  _sendJoinMessage(key) {
    const msg = Message.WorldJoin.create({ key });
    Network.send(Messaging.encode(msg));
  }

  _waitForPlayer(resolve, reject) {
    Messaging.onNextMessage(msg => {
      switch (msg.constructor) {
        case Message.PlayerUpdate:
          //Store.dispatch(navigate('debug', { text: msg.name }));
          resolve();
          break;
        case Message.PlayerCreateRequest:
          //Store.dispatch(navigate('debug', { text: 'Create requested' }));
          resolve();
          break;
        case Message.Error:
          reject(msg);
          break;
        default:
          reject({ type: 'Error', description: 'Server error' });
      }
    });
    setTimeout(() => reject({ type: 'Timeout', description: 'Timeout waiting for join' }), 2000);
  }

  create = key =>
    new Promise((resolve, reject) => {
      this._sendCreateMessage(key);
      this._waitForPlayer(resolve, reject);
    });

  join = key =>
    new Promise((resolve, reject) => {
      this._sendJoinMessage(key);
      this._waitForPlayer(resolve, reject);
    });
}

export default new World();
