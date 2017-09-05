import { Observable } from 'rxjs';
import { Msg } from '../services/messaging';
import { errorObs, sendMsgObs, mapMsgReceivedObs } from '../services/observables';
import { MESSAGE_RECEIVE, messageSend } from './message';
import { navigate } from './navigation';
import { playerUpdate } from './player';

export const WORLD_JOIN = 'gangsclient/world/JOIN';
export const WORLD_CREATE = 'gangsclient/world/CREATE';

export function worldJoin(key) {
  return { type: WORLD_JOIN, payload: key };
}

export function worldCreate(key) {
  return { type: WORLD_CREATE, payload: key };
}

export function joinWorldEpic(action$, store) {
  return action$.ofType(WORLD_JOIN).switchMap((action) => {
    const responseMapping = [
      [Msg.PlayerUpdate, msg => Observable.of(navigate('world'), playerUpdate(msg))],
      [Msg.PlayerCreateRequest, msg => Observable.of(navigate('createPlayer', { msg }))],
      [Msg.Error, msg => errorObs(msg)],
    ];
    return Observable.merge(
      sendMsgObs(Msg.WorldJoin.create({ key: action.payload })),
      mapMsgReceivedObs(action$, responseMapping),
    );
  });
}

export function createWorldEpic(action$, store) {
  return action$.ofType(WORLD_CREATE).switchMap((action) => {
    const responseMapping = [
      [Msg.PlayerUpdate, msg => Observable.of(navigate('world'), playerUpdate(msg))],
      [Msg.PlayerCreateRequest, msg => Observable.of(navigate('createPlayer', { msg }))],
      [Msg.Error, msg => errorObs(msg)],
    ];
    return Observable.merge(
      sendMsgObs(Msg.WorldCreate.create({ key: action.payload })),
      mapMsgReceivedObs(action$, responseMapping),
    );
  });
}
