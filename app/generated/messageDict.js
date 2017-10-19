// Generated File DO NOT EDIT!!!

import { msg } from '../../compiled_gpb';

export function parseMessage(type, data) {
  switch(type) {
    
      case 101: return msg.Ok.decode(data);
    
      case 102: return msg.Error.decode(data);
    
      case 103: return msg.WorldJoined.decode(data);
    
      case 104: return msg.PlayerUpdate.decode(data);
    
      case 105: return msg.PlayerCreateRequest.decode(data);
    
      case 106: return msg.LocationUpdate.decode(data);
    
      case 201: return msg.ServerReset.decode(data);
    
      case 202: return msg.User.decode(data);
    
      case 203: return msg.WorldCreate.decode(data);
    
      case 204: return msg.WorldJoin.decode(data);
    
      case 205: return msg.PlayerCreate.decode(data);
    
      case 501: return msg.Person.decode(data);
    
    default: return null;
  }
}

export function messageType(messageConstructor) {
  switch(messageConstructor) {
    
      case msg.Ok: return 101;
    
      case msg.Error: return 102;
    
      case msg.WorldJoined: return 103;
    
      case msg.PlayerUpdate: return 104;
    
      case msg.PlayerCreateRequest: return 105;
    
      case msg.LocationUpdate: return 106;
    
      case msg.ServerReset: return 201;
    
      case msg.User: return 202;
    
      case msg.WorldCreate: return 203;
    
      case msg.WorldJoin: return 204;
    
      case msg.PlayerCreate: return 205;
    
      case msg.Person: return 501;
    
    default: return null;
  }
}
