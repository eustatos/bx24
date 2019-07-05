import MessageSender from './message-sender';

const ms = new MessageSender(window, parent);

ms.send('getInitData').then(e => console.log(e));
export { MessageSender };
