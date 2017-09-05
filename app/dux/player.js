import { Observable } from 'rxjs';
import { navigate } from './navigation';
import { MSG_RECEIVE, messageSend } from './message';
import { Msg } from '../services/messaging';
import { errorObs, sendMsgObs, mapMsgReceivedObs } from '../services/observables';

export const PLAYER_CREATE = 'gangsclient/player/CREATE';
export const PLAYER_UPDATE = 'gangsclient/player/UPDATE';

const initialState = {
  loaded: false,
  name: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_UPDATE:
      return {
        ...state,
        loaded: true,
        name: action.payload.name,
      };
    default:
      return state;
  }
}

export function playerCreate(player) {
  return { type: PLAYER_CREATE, payload: player };
}

export function playerUpdate(player) {
  return { type: PLAYER_UPDATE, payload: player };
}

export function createPlayerEpic(action$) {
  return action$.ofType(PLAYER_CREATE).switchMap((action) => {
    const responseMapping = [
      [Msg.PlayerUpdate, msg => Observable.of(playerUpdate(msg))],
      [Msg.Error, msg => errorObs(msg)],
    ];
    return sendMsgObs(Msg.PlayerCreate.create(action.payload)).merge(
      mapMsgReceivedObs(action$, responseMapping),
    );
  });
}
