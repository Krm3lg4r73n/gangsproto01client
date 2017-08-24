import Network from './Network';
import { Message, Messaging } from './Messaging';

class Player {
  request = () =>
    new Promise((resolve, reject) => {
      resolve({});
    });
}

export default new Player();
