import BX24 from './bx24';

describe('bx24', () => {
  it('should be defined', () => {
    expect(BX24).toBeDefined();
  });

  it("must have method 'getAuth'", () => {
    const bx24 = new BX24();
    expect(bx24.getAuth).toBeDefined();
    expect(typeof bx24.getAuth).toBe('function');
  });
});
