import Params from '../params';
import parseWindowName from './parse-window-name';

describe('parseWindowName', () => {
  it('should be defined', () => {
    expect(parseWindowName).toBeDefined();
  });

  describe('valid parse', () => {
    const windowName =
      'b24-gx7djf.bitrix24.ru|1|7c415ade56db590abbc2219192194674';
    const params = new Params();
    beforeEach(() => {
      parseWindowName(windowName, params);
    });
    it('valid parse window APP_SID', () => {
      expect(params.APP_SID).toBe('7c415ade56db590abbc2219192194674');
    });
    it('valid parse DOMAIN', () => {
      parseWindowName(windowName, params);
      expect(params.DOMAIN).toBe('b24-gx7djf.bitrix24.ru');
    });
    it('valid parse window PROTOCOL', () => {
      parseWindowName(windowName, params);
      expect(params.PROTOCOL).toBe(1);
    });
  });
});
