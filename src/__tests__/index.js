import mqr from '../';

global.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
}));

test('should default export a function', () => {
  expect(mqr).toBeInstanceOf(Function);
});

describe('mqr#', () => {
  let query;

  beforeEach(() => {
    query = mqr();
  });

  describe('listen()', () => {
    test('should be a function', () => {
      expect(query).toHaveProperty('listen');
      expect(query.listen).toBeInstanceOf(Function);
    });

    test('should call handler on register', () => {
      const handler = jest.fn();
      query.listen('print', handler);
      expect(handler).toHaveBeenCalledWith(false);
    });

    test('should not call handler on register with execute false', () => {
      const handler = jest.fn();
      query.listen('print', handler, false);
      expect(handler).toHaveBeenCalledTimes(0);
    });
  });

  describe('remove()', () => {
    test('should be a function', () => {
      expect(query).toHaveProperty('remove');
      expect(query.remove).toBeInstanceOf(Function);
    });
  });

  describe('matches()', () => {
    test('should be a function', () => {
      expect(query).toHaveProperty('matches');
      expect(query.matches).toBeInstanceOf(Function);
    });

    test('should return a boolean', () => {
      expect(query.matches('print')).toBe(false);
    });
  });
});
