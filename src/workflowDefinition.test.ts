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

  test('Duplicate taskReferenceName Decision (Parent-Child)', () => {
    try {
      new WorkflowDefinition({
        name: 'test',
        rev: '01',
        tasks: [
          {
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
        ],
      });
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toEqual([
        {
          dataPath: '.tasks.0.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: {
            value: 'hihi2',
          },
        },
      ]);
    }
  });

  test('Duplicate taskReferenceName Decision (Child-Child)', () => {
    try {
      new WorkflowDefinition({
        name: 'test',
        rev: '01',
        tasks: [
          {
            taskReferenceName: 'hihi1',
            type: TaskTypes.Decision,
            inputParameters: {},
            decisions: {
              a: [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihix',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihix',
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
        ],
      });
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toEqual([
        {
          dataPath: '.tasks.0.decisions.a.1.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: {
            value: 'hihix',
          },
        },
      ]);
    }
  });

  test('Duplicate taskReferenceName Decision Diffrent case (Valid)', () => {
    expect(
      new WorkflowDefinition({
        name: 'test',
        rev: '01',
        tasks: [
          {
            taskReferenceName: 'hihi1',
            type: TaskTypes.Decision,
            inputParameters: {},
            decisions: {
              a: [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihix',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihiy',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
              b: [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihix',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihiy',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
            },
            defaultDecision: [
              {
                name: 'hihi',
                taskReferenceName: 'hihix',
                type: TaskTypes.Task,
                inputParameters: {},
              },
              {
                name: 'hihi',
                taskReferenceName: 'hihiy',
                type: TaskTypes.Task,
                inputParameters: {},
              },
            ],
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
          decisions: {
            a: [
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihix',
                type: 'TASK',
              },
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihiy',
                type: 'TASK',
              },
            ],
            b: [
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihix',
                type: 'TASK',
              },
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihiy',
                type: 'TASK',
              },
            ],
          },
          defaultDecision: [
            {
              name: 'hihi',
              taskReferenceName: 'hihix',
              type: TaskTypes.Task,
              inputParameters: {},
            },
            {
              name: 'hihi',
              taskReferenceName: 'hihiy',
              type: TaskTypes.Task,
              inputParameters: {},
            },
          ],
          inputParameters: {},
          taskReferenceName: 'hihi1',
          type: 'DECISION',
        },
      ],
    });
  });

  test('Duplicate taskReferenceName Parallel (Parent-Child)', () => {
    try {
      new WorkflowDefinition({
        name: 'test',
        rev: '01',
        tasks: [
          {
            taskReferenceName: 'hihi1',
            type: TaskTypes.Parallel,
            inputParameters: {},
            parallelTasks: [
              [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihi1',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihix',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
              [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihi2',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihiy',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
            ],
          },
        ],
      });
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toEqual([
        {
          dataPath: '.tasks.0.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: {
            value: 'hihi1',
          },
        },
      ]);
    }
  });

  test('Duplicate taskReferenceName Parallel (Child-Child)', () => {
    try {
      new WorkflowDefinition({
        name: 'test',
        rev: '01',
        tasks: [
          {
            taskReferenceName: 'hihi1',
            type: TaskTypes.Parallel,
            inputParameters: {},
            parallelTasks: [
              [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihix',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihix',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
              [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihiy',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihiy',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
            ],
          },
        ],
      });
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toEqual([
        {
          dataPath: '.tasks.0.parallelTasks.0.1.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: {
            value: 'hihix',
          },
        },
      ]);
    }
  });

  test('Duplicate taskReferenceName Parallel Diffirent line (Invalid)', () => {
    try {
      new WorkflowDefinition({
        name: 'test',
        rev: '01',
        tasks: [
          {
            taskReferenceName: 'hihi1',
            type: TaskTypes.Parallel,
            inputParameters: {},
            parallelTasks: [
              [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihia',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihiy',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
              [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihib',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihiy',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
            ],
          },
        ],
      });
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toEqual([
        {
          dataPath: '.tasks.0.parallelTasks.1.1.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: {
            value: 'hihiy',
          },
        },
      ]);
    }
  });
});
