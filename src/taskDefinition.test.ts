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
});
