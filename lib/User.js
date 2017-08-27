import Network from './Network';
import { Message, Messaging, message$ } from './Messaging';

class User {
  _sendUserMessage(username) {
    const user = Message.User.create({
      name: username,
    });
    Network.send(Messaging.encode(user));
  }

  _authenticate(username) {
    return new Promise((resolve, reject) => {
      this._sendUserMessage(username);
      Messaging.onNextMessage(message => {
        if (message instanceof Message.Ok) resolve();
        else if (message instanceof Message.Error) reject(message);
        else reject({ type: 'Error', description: 'Server error' });
      });
      setTimeout(() => reject({ type: 'Timeout', description: 'Timeout waiting for auth' }), 2000);
    });
  }

  _attachLogger() {
    message$.subscribe(message => {
      console.log(`Received: #${message.constructor.name}${JSON.stringify(message)}`);
    });
  }

  _resetServer() {
    const msg = Message.ServerReset.create();
    Network.send(Messaging.encode(msg));
  }

  login = ({ host, username }) =>
    new Promise((resolve, reject) => {
      console.log('user', 'connecting');
      Network.disconnect();
      Network.connect(`ws://${host}`)
        .then(() => this._resetServer())
        .then(() => this._attachLogger())
        .then(() => this._authenticate(username))
        .then(() => resolve())
        .catch(error => reject(error));
    });
}

export default new User();
