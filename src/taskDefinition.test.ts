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
      new Error(
        JSON.stringify([
          {
            keyword: 'maxLength',
            dataPath: '.name',
            schemaPath:
              '#/definitions/ITaskDefinition/properties/name/maxLength',
            params: { limit: 64 },
            message: 'should NOT be longer than 64 characters',
          },
        ]),
      ),
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
      new Error(
        JSON.stringify([
          {
            keyword: 'minimum',
            dataPath: '.ackTimeout',
            schemaPath:
              '#/definitions/ITaskDefinition/properties/ackTimeout/minimum',
            params: { comparison: '>=', limit: 0, exclusive: false },
            message: 'should be >= 0',
          },
        ]),
      ),
    );
  });
});
