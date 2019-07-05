import Params from './params';

/**
 * @internal
 */
class MessageSender {
  private _currentWindow: Window;
  private _parentWindow: Window;
  private _params: Params;
  private _resolvers: any;

  constructor(currentWindow: Window, parentWindow: Window) {
    this._params = new Params();
    this._currentWindow = currentWindow;
    this._parentWindow = parentWindow;
    this._resolvers = {};

    const q = this._currentWindow.name.split('|');
    this._params.DOMAIN = q[0].replace(/\:(80|443)$/, '');
    this._params.PROTOCOL = parseInt(q[1], 10) || 0;
    this._params.APP_SID = q[2];

    this._setListener();
  }

  /**
   *
   * @param cmd
   * @param callback
   * @param params
   */
  public send(cmd: string, params?: object): Promise<Function> {
    let resolverKey;
    const promise = new Promise<Function>(resolve => {
      resolverKey = this._addResolver(resolve);
    });

    cmd += [!!params ? JSON.stringify(params) : '', resolverKey].join(':');
    if (!!this._params.APP_SID) {
      cmd = [cmd, this._params.APP_SID].join(':');
    }
    const url =
      'http' + (this._params.PROTOCOL ? 's' : '') + '://' + this._params.DOMAIN;
    this._parentWindow.postMessage(cmd, url);
    return promise;
  }

  /**
   *
   * @param resolver
   * @param callback
   */
  private _addResolver(resolver: Function): string {
    const key = this._uniqueKey();
    this._resolvers[key] = resolver;
    return key;
  }

  /**
   *
   */
  private _uniqueKey(): string {
    let key = '';
    for (let counter = 0; counter < 4; counter++) {
      key += Math.random()
        .toString(32)
        .slice(2, 8);
    }
    return key;
  }

  private _setListener(): void {
    this._currentWindow.addEventListener(
      'message',
      this._eventHandler.bind(this),
    );
  }

  private _eventHandler(e: MessageEvent): void {
    const arr = e.data.match(/(^.*?):(.*$)/);
    if (arr.length === 3) {
      this._resolvers[arr[1]].call(null, JSON.parse(arr[2]));
    }
  }
}

export default MessageSender;