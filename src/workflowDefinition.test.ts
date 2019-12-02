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
            inputParameters: {},
          },
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

  test('Duplicate taskReferenceName', () => {
    try {
      new WorkflowDefinition({
        name: 'test',
        rev: '01',
        tasks: [
          {
            name: 'hihi',
            taskReferenceName: 'hihi',
            type: TaskTypes.Task,
            inputParameters: {},
          },
          {
            name: 'hihi',
            taskReferenceName: 'hihi',
            type: TaskTypes.Task,
            inputParameters: {},
          },
          {
            name: 'hihi',
            taskReferenceName: 'hihi',
            type: TaskTypes.Task,
            inputParameters: {},
          },
        ],
      });
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toEqual([
        {
          dataPath: '.tasks.1.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: { value: 'hihi' },
        },
      ]);
    }
  });

  test('Duplicate taskReferenceName Decision', () => {
    try {
      new WorkflowDefinition({
        name: 'test',
        rev: '01',
        tasks: [
          {
            name: 'hihi',
            taskReferenceName: 'hihi',
            type: TaskTypes.Task,
            inputParameters: {},
          },
          {
            name: 'hihi',
            taskReferenceName: 'hihi2',
            type: TaskTypes.Decision,
            inputParameters: {},
            decisions: {
              a: [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihi2',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
            },
            defaultDecision: [
              {
                name: 'hihi',
                taskReferenceName: 'hihi3',
                type: TaskTypes.Task,
                inputParameters: {},
              },
            ],
          },
          {
            name: 'hihi',
            taskReferenceName: 'hihi4',
            type: TaskTypes.Task,
            inputParameters: {},
          },
        ] as any,
      });
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toEqual([
        {
          dataPath: 'tasks.',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: { value: 'hihi3' },
        },
      ]);
    }
  });
});
