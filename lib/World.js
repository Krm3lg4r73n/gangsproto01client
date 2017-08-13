import Network from './Network';
import { Message, Messaging } from './Messaging';

class World {
  _sendCreateMessage(key) {
    const msg = Message.WorldCreate.create({ key });
    Network.send(Messaging.encode(msg));
  }
  _sendJoinMessage(key) {
    const msg = Message.WorldJoin.create({ key });
    Network.send(Messaging.encode(msg));
  }

  _waitForJoined(resolve, reject) {
    Messaging.onNextMessage(msg => {
      if (msg instanceof Message.WorldJoined) resolve(msg.worldId);
      else if (msg instanceof Message.Error) reject(msg);
      else reject('Server error');
    });
    setTimeout(() => reject({ type: 'timeout', description: 'Timeout waiting for join' }), 2000);
  }

  createWorld = key =>
    new Promise((resolve, reject) => {
      this._sendCreateMessage(key);
      this._waitForJoined(resolve, reject);
    });

  joinWorld = key =>
    new Promise((resolve, reject) => {
      this._sendJoinMessage(key);
      this._waitForJoined(resolve, reject);
    });
}

export default new World();
