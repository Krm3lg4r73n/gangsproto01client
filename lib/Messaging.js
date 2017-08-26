import { Subject } from 'rxjs';
import { MessageObservable } from './MessageObservable';
import { msg } from '../compiled_gpb';
import { parseMessage, messageType } from '../app/generated/messageDict';

class Messaging {
  constructor() {
    this._singleHandlers = new Map();
    this._messageHandlers = new Map();
    this._nextHandlers = new Array();
    this._globalHandlers = new Array();

    this._messageSubject$ = new Subject();
    this.message$ = new MessageObservable(this._messageSubject$);
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

    this._messageSubject$.next(message);

    this._handleEach(this._singleHandlers.get(type), message);
    this._singleHandlers.delete(type);

    this._handleEach(this._messageHandlers.get(type), message);

    this._handleEach(this._nextHandlers, message);
    this._nextHandlers = new Array();

    this._handleEach(this._globalHandlers, message);
  };

  onSingleMessage = (msgConstructor, handler) => {
    const type = messageType(msgConstructor);
    if (this._singleHandlers.has(type)) {
      this._singleHandlers.get(type).push(handler);
    } else {
      this._singleHandlers.set(type, new Array(handler));
    }
  };

  onMessage = (msgConstructor, handler) => {
    const type = messageType(msgConstructor);
    if (this._messageHandlers.has(type)) {
      this._messageHandlers.get(type).push(handler);
    } else {
      this._messageHandlers.set(type, new Array(handler));
    }
  };

  onNextMessage = handler => {
    this._nextHandlers.push(handler);
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
const message$ = instance.message$;
export { msg as Message, instance as Messaging, message$ };
