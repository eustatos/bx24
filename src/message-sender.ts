import Params from './entities/params';
import parseWindowName from './utils/parse-window-name';
import uniqueKey from './utils/unique-key'

type FunctionReturnString = () => string;


class MessageSender {
  private _currentWindow: Window;
  private _parentWindow: Window;
  private _params: Params;
  private _resolvers: any;
  private _uniqueKey: FunctionReturnString;

  constructor(currentWindow: Window, parentWindow: Window, params: Params) {
    this._params = params;
    this._currentWindow = currentWindow;
    this._parentWindow = parentWindow;
    this._resolvers = {};
    this._uniqueKey = uniqueKey;

    parseWindowName(currentWindow.name, this._params);
    this._setListener();
  }

  /**
   *
   * @param cmd
   * @param callback
   * @param params
   */
  public send(cmd: string, params?: object): Promise<any> {
    let resolverKey;
    const promise = new Promise<any>(resolve => {
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
