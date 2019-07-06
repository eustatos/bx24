import Auth from './entities/auth';
import MessageSender from './message-sender';

class BX24 {
  private _messageSender: MessageSender;

  constructor(currentWindow: Window = window, parentWindow: Window = parent) {
    this._messageSender = new MessageSender(currentWindow, parentWindow);
  }

  public getAuth() {
    return this._messageSender.send('getInitData');
  }
}

export default BX24;
