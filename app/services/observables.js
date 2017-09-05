import { Observable } from 'rxjs';
import { MSG_RECEIVE, messageSend } from '../dux/message';
import showError from './showError';

export function sendMsgObs(msg) {
  return Observable.of(messageSend(msg));
}

export function mapMsgReceivedObs(action$, mapping, default$) {
  return action$.ofType(MSG_RECEIVE).take(1).switchMap(({ payload }) => {
    const handler = mapping.find(item => item[0] === payload.msg.constructor);
    if (handler) return handler[1](payload.msg);
    return default$ || Observable.empty();
  });
}

export function errorObs(error) {
  showError(error);
  return Observable.empty();
}
