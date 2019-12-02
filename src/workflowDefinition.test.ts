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

  test('No Duplicate taskReferenceName Parallel', () => {
    expect(
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
                  taskReferenceName: 'hihib',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
              [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihic',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihid',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
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
          inputParameters: {},
          parallelTasks: [
            [
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihia',
                type: 'TASK',
              },
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihib',
                type: 'TASK',
              },
            ],
            [
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihic',
                type: 'TASK',
              },
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihid',
                type: 'TASK',
              },
            ],
          ],
          taskReferenceName: 'hihi1',
          type: 'PARALLEL',
        },
      ],
    });
  });

  test('Complicated tasks', () => {
    expect(
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
                  taskReferenceName: 'hihi2',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihi3',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
              [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihi4',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  taskReferenceName: 'hihi5',
                  type: TaskTypes.Decision,
                  inputParameters: {},
                  decisions: {
                    a: [
                      {
                        name: 'hihi',
                        taskReferenceName: 'hihi6',
                        type: TaskTypes.Task,
                        inputParameters: {},
                      },
                    ],
                  },
                  defaultDecision: [
                    {
                      name: 'hihi',
                      taskReferenceName: 'hihi6',
                      type: TaskTypes.Task,
                      inputParameters: {},
                    },
                  ],
                },
              ],
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
          inputParameters: {},
          parallelTasks: [
            [
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihi2',
                type: 'TASK',
              },
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihi3',
                type: 'TASK',
              },
            ],
            [
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihi4',
                type: 'TASK',
              },
              {
                decisions: {
                  a: [
                    {
                      inputParameters: {},
                      name: 'hihi',
                      taskReferenceName: 'hihi6',
                      type: 'TASK',
                    },
                  ],
                },
                defaultDecision: [
                  {
                    inputParameters: {},
                    name: 'hihi',
                    taskReferenceName: 'hihi6',
                    type: 'TASK',
                  },
                ],
                inputParameters: {},
                taskReferenceName: 'hihi5',
                type: 'DECISION',
              },
            ],
          ],
          taskReferenceName: 'hihi1',
          type: 'PARALLEL',
        },
      ],
    });
  });

  test('More Complicated tasks', () => {
    expect(
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
                  taskReferenceName: 'hihi2',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  name: 'hihi',
                  taskReferenceName: 'hihi3',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
              ],
              [
                {
                  name: 'hihi',
                  taskReferenceName: 'hihi4',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  taskReferenceName: 'hihi5',
                  type: TaskTypes.Decision,
                  inputParameters: {},
                  decisions: {
                    a: [
                      {
                        taskReferenceName: 'hihix',
                        type: TaskTypes.Parallel,
                        inputParameters: {},
                        parallelTasks: [
                          [
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihixx',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihixxx',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                          ],
                          [
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihiyy',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihiyyy',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                          ],
                        ],
                      },
                    ],
                    c: [
                      {
                        taskReferenceName: 'hihix',
                        type: TaskTypes.Parallel,
                        inputParameters: {},
                        parallelTasks: [
                          [
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihixx',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihixxx',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                          ],
                          [
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihiyy',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihiyyy',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                          ],
                        ],
                      },
                    ],
                  },
                  defaultDecision: [
                    {
                      taskReferenceName: 'hihix',
                      type: TaskTypes.Parallel,
                      inputParameters: {},
                      parallelTasks: [
                        [
                          {
                            name: 'hihi',
                            taskReferenceName: 'hihixx',
                            type: TaskTypes.Task,
                            inputParameters: {},
                          },
                          {
                            name: 'hihi',
                            taskReferenceName: 'hihixxx',
                            type: TaskTypes.Task,
                            inputParameters: {},
                          },
                        ],
                        [
                          {
                            name: 'hihi',
                            taskReferenceName: 'hihiyy',
                            type: TaskTypes.Task,
                            inputParameters: {},
                          },
                          {
                            name: 'hihi',
                            taskReferenceName: 'hihiyyy',
                            type: TaskTypes.Task,
                            inputParameters: {},
                          },
                        ],
                      ],
                    },
                  ],
                },
              ],
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
          inputParameters: {},
          parallelTasks: [
            [
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihi2',
                type: 'TASK',
              },
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihi3',
                type: 'TASK',
              },
            ],
            [
              {
                inputParameters: {},
                name: 'hihi',
                taskReferenceName: 'hihi4',
                type: 'TASK',
              },
              {
                decisions: {
                  a: [
                    {
                      inputParameters: {},
                      parallelTasks: [
                        [
                          {
                            inputParameters: {},
                            name: 'hihi',
                            taskReferenceName: 'hihixx',
                            type: 'TASK',
                          },
                          {
                            inputParameters: {},
                            name: 'hihi',
                            taskReferenceName: 'hihixxx',
                            type: 'TASK',
                          },
                        ],
                        [
                          {
                            inputParameters: {},
                            name: 'hihi',
                            taskReferenceName: 'hihiyy',
                            type: 'TASK',
                          },
                          {
                            inputParameters: {},
                            name: 'hihi',
                            taskReferenceName: 'hihiyyy',
                            type: 'TASK',
                          },
                        ],
                      ],
                      taskReferenceName: 'hihix',
                      type: 'PARALLEL',
                    },
                  ],
                  c: [
                    {
                      inputParameters: {},
                      parallelTasks: [
                        [
                          {
                            inputParameters: {},
                            name: 'hihi',
                            taskReferenceName: 'hihixx',
                            type: 'TASK',
                          },
                          {
                            inputParameters: {},
                            name: 'hihi',
                            taskReferenceName: 'hihixxx',
                            type: 'TASK',
                          },
                        ],
                        [
                          {
                            inputParameters: {},
                            name: 'hihi',
                            taskReferenceName: 'hihiyy',
                            type: 'TASK',
                          },
                          {
                            inputParameters: {},
                            name: 'hihi',
                            taskReferenceName: 'hihiyyy',
                            type: 'TASK',
                          },
                        ],
                      ],
                      taskReferenceName: 'hihix',
                      type: 'PARALLEL',
                    },
                  ],
                },
                defaultDecision: [
                  {
                    inputParameters: {},
                    parallelTasks: [
                      [
                        {
                          inputParameters: {},
                          name: 'hihi',
                          taskReferenceName: 'hihixx',
                          type: 'TASK',
                        },
                        {
                          inputParameters: {},
                          name: 'hihi',
                          taskReferenceName: 'hihixxx',
                          type: 'TASK',
                        },
                      ],
                      [
                        {
                          inputParameters: {},
                          name: 'hihi',
                          taskReferenceName: 'hihiyy',
                          type: 'TASK',
                        },
                        {
                          inputParameters: {},
                          name: 'hihi',
                          taskReferenceName: 'hihiyyy',
                          type: 'TASK',
                        },
                      ],
                    ],
                    taskReferenceName: 'hihix',
                    type: 'PARALLEL',
                  },
                ],
                inputParameters: {},
                taskReferenceName: 'hihi5',
                type: 'DECISION',
              },
            ],
          ],
          taskReferenceName: 'hihi1',
          type: 'PARALLEL',
        },
      ],
    });
  });

  test('Duplicate in deep child Complicated tasks', () => {
    expect(
      () =>
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
                    taskReferenceName: 'hihi2',
                    type: TaskTypes.Task,
                    inputParameters: {},
                  },
                  {
                    name: 'hihi',
                    taskReferenceName: 'hihi3',
                    type: TaskTypes.Task,
                    inputParameters: {},
                  },
                ],
                [
                  {
                    name: 'hihi',
                    taskReferenceName: 'hihi4',
                    type: TaskTypes.Task,
                    inputParameters: {},
                  },
                  {
                    taskReferenceName: 'hihi5',
                    type: TaskTypes.Decision,
                    inputParameters: {},
                    decisions: {
                      a: [
                        {
                          taskReferenceName: 'hihix',
                          type: TaskTypes.Parallel,
                          inputParameters: {},
                          parallelTasks: [
                            [
                              {
                                name: 'hihi',
                                taskReferenceName: 'hihixx',
                                type: TaskTypes.Task,
                                inputParameters: {},
                              },
                              {
                                name: 'hihi',
                                taskReferenceName: 'hihixxx',
                                type: TaskTypes.Task,
                                inputParameters: {},
                              },
                            ],
                            [
                              {
                                name: 'hihi',
                                taskReferenceName: 'hihiyy',
                                type: TaskTypes.Task,
                                inputParameters: {},
                              },
                              {
                                name: 'hihi',
                                taskReferenceName: 'hihi1',
                                type: TaskTypes.Task,
                                inputParameters: {},
                              },
                            ],
                          ],
                        },
                      ],
                      c: [
                        {
                          taskReferenceName: 'hihix',
                          type: TaskTypes.Parallel,
                          inputParameters: {},
                          parallelTasks: [
                            [
                              {
                                name: 'hihi',
                                taskReferenceName: 'hihixx',
                                type: TaskTypes.Task,
                                inputParameters: {},
                              },
                              {
                                name: 'hihi',
                                taskReferenceName: 'hihixxx',
                                type: TaskTypes.Task,
                                inputParameters: {},
                              },
                            ],
                            [
                              {
                                name: 'hihi',
                                taskReferenceName: 'hihiyy',
                                type: TaskTypes.Task,
                                inputParameters: {},
                              },
                              {
                                name: 'hihi',
                                taskReferenceName: 'hihiyyy',
                                type: TaskTypes.Task,
                                inputParameters: {},
                              },
                            ],
                          ],
                        },
                      ],
                    },
                    defaultDecision: [
                      {
                        taskReferenceName: 'hihix',
                        type: TaskTypes.Parallel,
                        inputParameters: {},
                        parallelTasks: [
                          [
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihixx',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihixxx',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                          ],
                          [
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihiyy',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                            {
                              name: 'hihi',
                              taskReferenceName: 'hihiyyy',
                              type: TaskTypes.Task,
                              inputParameters: {},
                            },
                          ],
                        ],
                      },
                    ],
                  },
                ],
              ],
            },
          ],
        }),
    ).toThrow(
      new Error([
        {
          dataPath: '.tasks.0.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: { value: 'hihi1' },
        },
      ] as any),
    );
  });

  test('Decision on Decision duplicate', () => {
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
                        taskReferenceName: 'hihiyyyy',
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
          dataPath: '.tasks.0.decisions.a.1.decisions.a.1.taskReferenceName',
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: { value: 'hihix' },
        },
      ] as any),
    );
  });

  test('Decision on Decision Duplicate difirent decision', () => {
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
                  taskReferenceName: 'hihi2',
                  type: TaskTypes.Task,
                  inputParameters: {},
                },
                {
                  taskReferenceName: 'hihi3',
                  type: TaskTypes.Decision,
                  inputParameters: {},
                  decisions: {
                    x: [
                      {
                        name: 'hihi',
                        taskReferenceName: 'hihi4',
                        type: TaskTypes.Task,
                        inputParameters: {},
                      },
                      {
                        name: 'hihi',
                        taskReferenceName: 'hihi5',
                        type: TaskTypes.Task,
                        inputParameters: {},
                      },
                    ],
                  },
                  defaultDecision: [
                    {
                      name: 'hihi',
                      taskReferenceName: 'hihi6',
                      type: TaskTypes.Task,
                      inputParameters: {},
                    },
                  ],
                },
              ],
              b: [
                {
                  taskReferenceName: 'hihi3',
                  type: TaskTypes.Decision,
                  inputParameters: {},
                  decisions: {
                    x: [
                      {
                        name: 'hihi',
                        taskReferenceName: 'hihi4',
                        type: TaskTypes.Task,
                        inputParameters: {},
                      },
                      {
                        name: 'hihi',
                        taskReferenceName: 'hihi5',
                        type: TaskTypes.Task,
                        inputParameters: {},
                      },
                    ],
                  },
                  defaultDecision: [
                    {
                      name: 'hihi',
                      taskReferenceName: 'hihi11',
                      type: TaskTypes.Task,
                      inputParameters: {},
                    },
                  ],
                },
              ],
            },
            defaultDecision: [
              {
                name: 'hihi',
                taskReferenceName: 'hihi9',
                type: TaskTypes.Task,
                inputParameters: {},
              },
              {
                taskReferenceName: 'hihi3',
                type: TaskTypes.Decision,
                inputParameters: {},
                decisions: {
                  x: [
                    {
                      name: 'hihi',
                      taskReferenceName: 'hihi4',
                      type: TaskTypes.Task,
                      inputParameters: {},
                    },
                    {
                      name: 'hihi',
                      taskReferenceName: 'hihi5',
                      type: TaskTypes.Task,
                      inputParameters: {},
                    },
                  ],
                },
                defaultDecision: [
                  {
                    name: 'hihi',
                    taskReferenceName: 'hihi6',
                    type: TaskTypes.Task,
                    inputParameters: {},
                  },
                ],
              },
            ],
          },
        ],
      });
    }).not.toThrow();
  });
});
