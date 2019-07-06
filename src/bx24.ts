import IAuth from './entities/auth';
import Params from './entities/params';
import MessageSender from './message-sender';

class BX24 {
  private _messageSender: MessageSender;
  private _params!: Params;

  constructor(currentWindow: Window = window, parentWindow: Window = parent) {
    this._params = new Params();
    this._messageSender = new MessageSender(
      currentWindow,
      parentWindow,
      this._params,
    );
  }

  public getAuth(): Promise<IAuth> {
    let resultPromise: Promise<IAuth>;
    if (this._checkAuth()) {
      resultPromise = Promise.resolve(this._params.getAuth());
    } else {
      resultPromise = new Promise<IAuth>((resolve, reject) => {
        this._messageSender
          .send('getInitData')
          .then((params: Params) => {
            this._params = Object.assign(this._params, params);
            resolve(this._params.getAuth());
          })
          .catch(err => {
            reject(err);
          });
      });
    }
    return resultPromise;
  }

  private _checkAuth(): boolean {
    const authExpires = this._params.getAuthExpires();
    const check =
      typeof this._params.APP_SID !== 'undefined' &&
      typeof authExpires === 'number' &&
      authExpires > Date.now();
    return check;
  }
}

export default BX24;
