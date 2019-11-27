import { TaskTypes } from './task';
import { WorkflowDefinition } from './workflowDefinition';

describe('WorkflowDefinition', () => {
  test('Test default', () => {
    expect(
      new WorkflowDefinition({
        name: 'test',
        rev: '01',
        tasks: [
          {
            name: 'hihi',
            taskReferenceName: 'hihi',
            type: TaskTypes.Task,
          } as any,
        ],
      }),
    ).toEqual({
      description: '-',
      failureStrategy: 'FAILED',
      name: 'test',
      outputParameters: {},
      retry: {
        limit: 0,
      },
      rev: '01',
      tasks: [
        {
          name: 'hihi',
          taskReferenceName: 'hihi',
          type: 'TASK',
          inputParameters: {},
        },
      ],
    });
  });
});
