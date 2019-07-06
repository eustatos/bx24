import uniqueKey from './unique-key';
describe('uniqueKey', () => {
  it('should be defined', () => {
    expect(uniqueKey).toBeDefined();
  });
  it('must create key', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = jest.fn();
    mockMath.random.mockReturnValueOnce(0.5452750747659276);
    mockMath.random.mockReturnValueOnce(0.4475493408858837);
    mockMath.random.mockReturnValueOnce(0.019097426546724194);
    mockMath.random.mockReturnValueOnce(0.5484876714374145);
    global.Math = mockMath;
    expect(uniqueKey()).toBe('hebibdea99ft0jhp39hhkr08');
  });
});
