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
          keyword: 'maxLength',
          message: 'should NOT be longer than 64 characters',
          params: { limit: 64 },
          schemaPath: '#/properties/name/maxLength',
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
          dataPath: '.ackTimeout',
          keyword: 'minimum',
          message: 'should be >= 0',
          params: { comparison: '>=', exclusive: false, limit: 0 },
          schemaPath: '#/properties/ackTimeout/minimum',
        },
        {
          dataPath: '.retry.delay',
          keyword: 'minimum',
          message: 'should be >= 0',
          params: { comparison: '>=', exclusive: false, limit: 0 },
          schemaPath: '#/properties/retry/properties/delay/minimum',
        },
        {
          dataPath: '.retry.limit',
          keyword: 'minimum',
          message: 'should be >= 0',
          params: { comparison: '>=', exclusive: false, limit: 0 },
          schemaPath: '#/properties/retry/properties/limit/minimum',
        },
        {
          dataPath: '.timeout',
          keyword: 'minimum',
          message: 'should be >= 0',
          params: { comparison: '>=', exclusive: false, limit: 0 },
          schemaPath: '#/properties/timeout/minimum',
        },
      ] as any),
    );
  });
});
