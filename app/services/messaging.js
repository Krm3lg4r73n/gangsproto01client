
import { msg } from '../../compiled_gpb';
import { parseMessage, messageType } from '../generated/messageDict';

listeners = new Map();
singleCallbacks = new Map();

const encode = (message) => {
  const type = messageType(message.constructor);
  const msgData = message.constructor.encode(message).finish();

  const buffer = new Uint8Array(4 + msgData.byteLength);
  buffer.set(msgData, 4 /*offset*/);
  new DataView(buffer.buffer).setUint32(0 /*offset*/, type, true /*littleEndian*/);
  return buffer;
};

const handle = (data) => {
  const dataview = new DataView(data);
  const msgType = dataview.getUint32(0, true /*littleEndian*/);
  const message = parseMessage(msgType, new Uint8Array(data, 4));

  const msgListeners = listeners.get(msgType);
  if (msgListeners && msgListeners.length > 0) {
    msgListeners.forEach((handler) => handler(message));
  }

  const msgCallbacks = singleCallbacks.get(msgType);
  if(msgCallbacks && msgCallbacks.length > 0) {
    msgCallbacks.forEach((handler) => handler(message));
    singleCallbacks.delete(msgType);
  }
}

const onSingleMessage = (msgConstructor, callback) => {
  const msgType = messageType(msgConstructor);
  if (singleCallbacks.has(msgType)) {
    singleCallbacks.get(msgType).push(callback);
  } else {
    singleCallbacks.set(msgType, new Array(callback));
  }
}

// TODO: refactor listeners: onSingleMessage onNextMessage onEveryMessage onMessage

const registerListener = (listener, msgConstructor) => {
  const msgType = messageType(msgConstructor);
  if (listeners.has(msgType)) {
    listeners.get(msgType).push(listener);
  } else {
    listeners.set(msgType, new Array(listener));
  }
};

const unregisterListener = (listener, msgConstructor) => {
  const msgType = messageType(msgConstructor);
  if (listeners.has(msgType)){
    const msgListeners = listeners.get(msgType);
    if (msgListeners.length === 1) {
      listeners.delete(msgType);
    } else {
      listeners.set(msgType, msgListeners.filter((l) => l !== listener));
    }
  }
};

export { msg as Message };
export { encode, handle, onSingleMessage, registerListener, unregisterListener };
