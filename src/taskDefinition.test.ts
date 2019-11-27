import { TaskDefinition } from './taskDefinition';

describe('TaskDefinition', () => {
  test('Test default', () => {
    expect(
      new TaskDefinition({
        name: 'eieieiei',
      }),
    ).toEqual({
      ackTimeout: 0,
      description: '-',
      name: 'eieieiei',
      retry: {
        delay: 0,
        limit: 0,
      },
      timeout: 0,
    });
  });

  test('Test All value assign', () => {
    expect(
      new TaskDefinition({
        ackTimeout: 3,
        description: '-',
        name: 'eieieiei',
        retry: {
          delay: 6,
          limit: 10,
        },
        timeout: 110,
      }),
    ).toEqual({
      ackTimeout: 3,
      description: '-',
      name: 'eieieiei',
      retry: {
        delay: 6,
        limit: 10,
      },
      timeout: 110,
    });
  });

  test('Test Some value assign', () => {
    expect(
      new TaskDefinition({
        ackTimeout: 3,
        description: '-',
        name: 'eieieiei',
        retry: {
          limit: 10,
        } as any,
        timeout: 110,
      }),
    ).toEqual({
      ackTimeout: 3,
      description: '-',
      name: 'eieieiei',
      retry: {
        delay: 0,
        limit: 10,
      },
      timeout: 110,
    });
  });

  test('Test invalid Name', () => {
    expect(
      () =>
        new TaskDefinition({
          name:
            'eieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieieiei',
        }),
    ).toThrow(
      new Error([
        {
          dataPath: '.name',
          keyword: 'pattern',
          message: 'should match pattern "^[a-zA-Z0-9-_]{1,64}$"',
          params: { pattern: '^[a-zA-Z0-9-_]{1,64}$' },
          schemaPath: '#/properties/name/pattern',
        },
      ] as any),
    );
  });

  test('Test invalid other field', () => {
    expect(
      () =>
        new TaskDefinition({
          ackTimeout: -3,
          description: '-',
          retry: {
            delay: -20,
            limit: -10,
          },
          timeout: -110,
          name: 'aa',
        }),
    ).toThrow(
      new Error([
        {
          keyword: 'minimum',
          dataPath: '.ackTimeout',
          schemaPath: '#/properties/ackTimeout/minimum',
          params: { comparison: '>=', limit: 0, exclusive: false },
          message: 'should be >= 0',
        },
        {
          keyword: 'minimum',
          dataPath: '.retry.delay',
          schemaPath: '#/properties/retry/properties/delay/minimum',
          params: { comparison: '>=', limit: 0, exclusive: false },
          message: 'should be >= 0',
        },
        {
          keyword: 'minimum',
          dataPath: '.retry.limit',
          schemaPath: '#/properties/retry/properties/limit/minimum',
          params: { comparison: '>=', limit: 0, exclusive: false },
          message: 'should be >= 0',
        },
        {
          keyword: 'minimum',
          dataPath: '.timeout',
          schemaPath: '#/properties/timeout/minimum',
          params: { comparison: '>=', limit: 0, exclusive: false },
          message: 'should be >= 0',
        },
      ] as any),
    );
  });
});
