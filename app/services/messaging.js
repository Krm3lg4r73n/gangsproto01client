
import { msg } from '../../compiled_gpb';
import { parseMessage, messageType } from '../generated/messageDict';

listeners = new Map();

const send = (socket, message) => {
  const type = messageType(message.constructor);
  const msgData = message.constructor.encode(message).finish();

  const buffer = new Uint8Array(4 + msgData.byteLength);
  buffer.set(msgData, 4 /*offset*/);
  new DataView(buffer.buffer).setUint32(0 /*offset*/, type, true /*littleEndian*/);
  socket.send(buffer);
};

const handle = (data) => {
  const dataview = new DataView(data);
  const msgType = dataview.getUint32(0, true /*littleEndian*/);
  const message = parseMessage(msgType, new Uint8Array(data, 4));
  const msgListeners = listeners.get(msgType);
  if (msgListeners && msgListeners.length > 0) {
    msgListeners.forEach((handler) => handler(message));
  }
}

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
export { send, handle, registerListener, unregisterListener };
