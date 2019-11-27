import * as CommonUtils from './common';

describe('Utils/common', () => {
  describe('concatArray', () => {
    test('empty target', () => {
      expect(CommonUtils.concatArray(undefined, 'hello')).toEqual(['hello']);
    });

    test('empty items', () => {
      expect(CommonUtils.concatArray(['eiei'], undefined)).toEqual(['eiei']);
    });

    test('items array', () => {
      expect(CommonUtils.concatArray(['eiei'], ['what', 'lol'])).toEqual([
        'eiei',
        'what',
        'lol',
      ]);
    });

    test('single item', () => {
      expect(CommonUtils.concatArray(['eiei'], 'what')).toEqual([
        'eiei',
        'what',
      ]);
    });
  });
});
