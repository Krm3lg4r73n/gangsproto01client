import { msg } from '../compiled_gpb';
import { parseMessage, messageType } from '../app/generated/messageDict';

class Messaging {
  constructor() {
    this.singleHandlers = new Map();
    this.messageHandlers = new Map();
    this.nextHandlers = new Array();
    this.globalHandlers = new Array();
  }

  encode = message => {
    const type = messageType(message.constructor);
    const msgData = message.constructor.encode(message).finish();

    const buffer = new Uint8Array(4 + msgData.byteLength);
    buffer.set(msgData, 4 /*offset*/);
    new DataView(buffer.buffer).setUint32(0 /*offset*/, type, true /*littleEndian*/);
    return buffer;
  };

  handle = data => {
    const { type, message } = this._decode(data);

    this._handleEach(this.singleHandlers.get(type), message);
    this.singleHandlers.delete(type);

    this._handleEach(this.messageHandlers.get(type), message);

    this._handleEach(this.nextHandlers, message);
    this.nextHandlers = new Array();

    this._handleEach(this.globalHandlers, message);
  };

  onSingleMessage = (msgConstructor, handler) => {
    const type = messageType(msgConstructor);
    if (this.singleHandlers.has(type)) {
      this.singleHandlers.get(type).push(handler);
    } else {
      this.singleHandlers.set(type, new Array(handler));
    }
  };

  onMessage = (msgConstructor, handler) => {
    const type = messageType(msgConstructor);
    if (this.messageHandlers.has(type)) {
      this.messageHandlers.get(type).push(handler);
    } else {
      this.messageHandlers.set(type, new Array(handler));
    }
  };

  onNextMessage = handler => {
    this.nextHandlers.push(handler);
  };

  onEveryMessage = handler => {
    this.globalHandlers.push(handler);
  };

  _decode(data) {
    const dataview = new DataView(data);
    const type = dataview.getUint32(0 /*offset*/, true /*littleEndian*/);
    const message = parseMessage(type, new Uint8Array(data, 4));
    return { type, message };
  }

  _handleEach(handlers, message) {
    if (handlers && handlers.length > 0) {
      handlers.forEach(handler => handler(message));
    }
  }
}

const instance = new Messaging();
export { msg as Message, instance as Messaging };
