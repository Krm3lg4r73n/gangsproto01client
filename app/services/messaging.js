import { msg } from '../../compiled_gpb';
import { parseMessage, messageType } from '../generated/messageDict';
import Messaging from '../../lib/Messaging';

export { msg as Msg };

export function decode(data) {
  const dataview = new DataView(data);
  const type = dataview.getUint32(0 /* offset */, true /* littleEndian */);
  return parseMessage(type, new Uint8Array(data, 4));
}

export function encode(message) {
  const type = messageType(message.constructor);
  const msgData = message.constructor.encode(message).finish();

  const buffer = new Uint8Array(4 + msgData.byteLength);
  buffer.set(msgData, 4 /* offset */);
  new DataView(buffer.buffer).setUint32(0 /* offset */, type, true /* littleEndian */);
  return buffer;
}

export function msgToString(message) {
  if (!message) return 'Null{}';
  return `${message.constructor.name}${JSON.stringify(message)}`;
}
