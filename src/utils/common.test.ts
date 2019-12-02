import * as CommonUtils from './common';

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
    expect(CommonUtils.concatArray(['eiei'], 'what')).toEqual(['eiei', 'what']);
  });
});

describe('jsonTryParse', () => {
  test('Valid json', () => {
    expect(CommonUtils.jsonTryParse('{"a": "b"}')).toEqual({ a: 'b' });
    expect(CommonUtils.jsonTryParse('[1,2,3]')).toEqual([1, 2, 3]);
  });

  test('Invalid json', () => {
    expect(CommonUtils.jsonTryParse('123{1"a": "b"}')).toEqual({});
    expect(CommonUtils.jsonTryParse('312312[1,2,3]')).toEqual({});
  });

  test('Invalid json (with default)', () => {
    expect(CommonUtils.jsonTryParse('123{1"a": "b"}', { a: 'b' })).toEqual({
      a: 'b',
    });
    expect(CommonUtils.jsonTryParse('312312[1,2,3]', { a: 'b' })).toEqual({
      a: 'b',
    });
  });
});

describe('toObjectByKey', () => {
  test('toObjectByKey', () => {
    expect(
      CommonUtils.toObjectByKey(
        [
          {
            name: 1,
            log: 1,
          },
          {
            name: 2,
            log: 2,
          },
          {
            name: 3,
            log: 3,
          },
          {
            name: 4,
            log: 4,
          },
        ],
        'name',
      ),
    ).toEqual({
      1: {
        name: 1,
        log: 1,
      },
      2: {
        name: 2,
        log: 2,
      },
      3: {
        name: 3,
        log: 3,
      },
      4: {
        name: 4,
        log: 4,
      },
    });
  });

  test('Duplicate keys', () => {
    expect(
      CommonUtils.toObjectByKey(
        [
          {
            name: 1,
            log: 1,
          },
          {
            name: 2,
            log: 2,
          },
          {
            name: 3,
            log: 3,
          },
          {
            name: 4,
            log: 4,
          },
          {
            name: 1,
            log: 123156456456413,
          },
        ],
        'name',
      ),
    ).toEqual({
      1: {
        name: 1,
        log: 123156456456413,
      },
      2: {
        name: 2,
        log: 2,
      },
      3: {
        name: 3,
        log: 3,
      },
      4: {
        name: 4,
        log: 4,
      },
    });
  });

  test('Empty', () => {
    expect(CommonUtils.toObjectByKey([], 'name')).toEqual({});
  });
});
