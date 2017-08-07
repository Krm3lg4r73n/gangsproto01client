// Generated File DO NOT EDIT!!!

import { msg } from '../../compiled_gpb';

export function parseMessage(type, data) {
  switch(type) {
    
      case 101: return msg.Ok.decode(data);
    
      case 102: return msg.Error.decode(data);
    
      case 103: return msg.Bootstrap.decode(data);
    
      case 201: return msg.User.decode(data);
    
      case 202: return msg.WorldCreate.decode(data);
    
      case 203: return msg.WorldJoin.decode(data);
    
      case 501: return msg.Person.decode(data);
    
    default: return null;
  }
}

export function messageType(messageConstructor) {
  switch(messageConstructor) {
    
      case msg.Ok: return 101;
    
      case msg.Error: return 102;
    
      case msg.Bootstrap: return 103;
    
      case msg.User: return 201;
    
      case msg.WorldCreate: return 202;
    
      case msg.WorldJoin: return 203;
    
      case msg.Person: return 501;
    
    default: return null;
  }
}
