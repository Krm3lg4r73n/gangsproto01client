import { Observable } from 'rxjs';
import { MSG_RECEIVE, messageSend } from './message';
import { Msg } from '../services/messaging';
import { errorObs, sendMsgObs, mapMsgReceivedObs } from '../services/observables';

export const LOCATION_UPDATE = 'gangsclient/location/UPDATE';

const initialState = {
  loaded: false,
  current_location: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOCATION_UPDATE:
      return {
        ...state,
        loaded: true,
        current_location: action.payload,
      };
    default:
      return state;
  }
}

export function locationUpdate(location) {
  return { type: LOCATION_UPDATE, payload: location };
}

export function updateLocationEpic(action$) {
  return action$
    .ofType(MSG_RECEIVE)
    .filter(({ payload }) => payload.msg.constructor === Msg.LocationUpdate)
    .switchMap(({ payload }) => Observable.of(locationUpdate(payload.msg)));
}
