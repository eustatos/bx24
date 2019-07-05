import MessageSender from './message-sender';

describe('message-sender', () => {
  it('should be create', () => {
    interface IMockWindow extends Window {
        addEventListener: jest.Mock<{}> & typeof window.addEventListener;
        removeEventListener: jest.Mock<{}> & typeof window.removeEventListener;
    }
    
    function mockWindow() {
        window.addEventListener = jest.fn();
        window.removeEventListener = jest.fn();
        return window as IMockWindow;
    }
    
    const currentWindow = mockWindow();


    const ms = new MessageSender(currentWindow, window);
    expect(ms).toBeDefined();

  });
});
