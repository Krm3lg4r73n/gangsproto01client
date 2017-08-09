import { Messaging } from './Messaging';

class Network {
  constructor() {
    this._socket = null;
  }

  connect = (url) => new Promise((resolve, reject) => {
    this._socket = new WebSocket(url);
    this._socket.binaryType = 'arraybuffer';

    this._socket.onopen = () => {
      this._socket.onopen = null;
      this._socket.onmessage = this.onMessage;
      this._socket.onerror = this.onError;
      this._socket.onclose = this.onClose;
      resolve();
    };

    this._socket.onclose = (event) => {
      this._socket = null;
      reject(event.message);
    }
  });

  disconnect = () => {
    if (this._socket) {
      this._socket.close();
      this._socket = null;
    }
  };

  send = (data) => {
    this._socket.send(data);
  }

  onMessage = (event) => {
    Messaging.handle(event.data);
  };

  onError = (event) => {
    console.log("WS Error: " + event.message);
  };

  onClose = (event) => {
    console.log("WS Close: " + event.code);
  };
}

const instance = new Network();
export default instance;
