import Network from './Network';
import { Message, Messaging } from './Messaging';

class Login {
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
        else if (message instanceof Message.Error) reject(message.type);
        else reject('Server error');
      });
      setTimeout(() => reject('Timeout waiting for auth'), 5000);
    });
  }

  login = ({ host, username }) =>
    new Promise((resolve, reject) => {
      Network.disconnect();
      Network.connect(`ws://${host}`)
        .then(() => this._authenticate(username))
        .then(() => resolve())
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
}

const instance = new Login();
export default instance;
