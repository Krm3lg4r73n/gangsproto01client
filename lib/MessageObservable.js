import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operator/filter';

export class MessageObservable extends Observable {
  constructor(subject) {
    super();
    this.source = subject;
  }

  ofType(...keys) {
    return this.filter((msg) => {
      const msgType = msg.constructor;
      const len = keys.length;
      if (len === 1) {
        return msgType === keys[0];
      }
      for (let i = 0; i < len; i++) {
        if (keys[i] === msgType) {
          return true;
        }
      }

      return false;
    });
  }
}
