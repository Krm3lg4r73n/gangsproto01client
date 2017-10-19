import { Observable } from 'rxjs';
import { messageReceive } from '../dux/message';
import { Msg } from './messaging';

export function initWorld(state) {
  return Observable.of(
    messageReceive(Msg.PlayerUpdate.create(state.player)),
    messageReceive(Msg.LocationUpdate.create(state.currentLocation)),
  );
}
