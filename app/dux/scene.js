import { Observable } from 'rxjs';
import { MSG_RECEIVE, messageSend } from './message';
import { Msg } from '../services/messaging';
import { errorObs, sendMsgObs, mapMsgReceivedObs } from '../services/observables';

export const SCENE_ENTER = 'gangsclient/scene/ENTER';
export const SCENE_NEW_ENVIRONMENT_LINE = 'gangsclient/scene/NEW_ENVIRONMENT_LINE';

const initialState = {
  name: '--',
  environmentLines: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SCENE_ENTER:
      return {
        ...state,
        name: action.payload.name,
        environmentLines: [],
      };
    case SCENE_NEW_ENVIRONMENT_LINE:
      return {
        ...state,
        environmentLines: state.environmentLines.concat([action.payload]),
      };
    default:
      return state;
  }
}

export function sceneEnter(scene) {
  return { type: SCENE_ENTER, payload: scene };
}

export function sceneNewEnvironmentLine(line) {
  return { type: SCENE_NEW_ENVIRONMENT_LINE, payload: line };
}
