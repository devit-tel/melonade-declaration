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
    expect(() => {
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
    }).toThrow(
      new Error([
        {
          dataPath: '.tasks.1.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: { value: 'hihi' },
        },
      ] as any),
    );
  });

  test('Duplicate taskReferenceName Decision (Parent-Child)', () => {
    expect(() => {
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
    }).toThrow(
      new Error([
        {
          dataPath: '.tasks.0.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: {
            value: 'hihi2',
          },
        },
      ] as any),
    );
  });

  test('Duplicate taskReferenceName Decision (Child-Child)', () => {
    expect(() => {
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
    }).toThrow(
      new Error([
        {
          dataPath: '.tasks.0.decisions.a.1.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: {
            value: 'hihix',
          },
        },
      ] as any),
    );
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
    expect(() => {
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
    }).toThrow(
      new Error([
        {
          dataPath: '.tasks.0.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: {
            value: 'hihi1',
          },
        },
      ] as any),
    );
  });

  test('Duplicate taskReferenceName Parallel (Child-Child)', () => {
    expect(() => {
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
    }).toThrow(
      new Error([
        {
          dataPath: '.tasks.0.parallelTasks.0.1.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: {
            value: 'hihix',
          },
        },
      ] as any),
    );
  });

  test('Duplicate taskReferenceName Parallel Diffirent line (Invalid)', () => {
    expect(() => {
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
    }).toThrow(
      new Error([
        {
          dataPath: '.tasks.0.parallelTasks.1.1.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: {
            value: 'hihiy',
          },
        },
      ] as any),
    );
  });
});
