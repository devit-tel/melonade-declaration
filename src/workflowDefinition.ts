import * as R from 'ramda';
import { Task } from '.';
import { WorkflowFailureStrategies } from './state';
import { TaskTypes } from './task';
import { validate } from './utils/common';

export interface IWorkflowRef {
  name: string;
  rev: string;
}

export interface IBaseTask {
  /**
   * The referance name using in workflow
   *
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-zA-Z0-9-_]+$
   * @TJS-type string
   */
  taskReferenceName: string;
  /**
   * The input to be mapping to workflow's data
   *
   * @TJS-type object
   */
  inputParameters: {
    [key: string]: string | number | object;
  };
}

export interface ITaskTask extends IBaseTask {
  /**
   * The task's name
   *
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-zA-Z0-9-_]+$
   * @TJS-type string
   */
  name: string;
  type: TaskTypes.Task;
  /**
   * The given time that task can ack before it timeout in miliseconds (0 is no timeout)
   *
   * @minimum 0
   * @TJS-type integer
   */
  ackTimeout?: number;
  /**
   * The given time that task can finish before it timeout in miliseconds (0 is no timeout)
   *
   * @minimum 0
   * @TJS-type integer
   */
  timeout?: number;
  /**
   * Retry object
   *
   */
  retry?: {
    /**
     * Retry limit number (0 is no retry)
     *
     * @minimum 0
     * @TJS-type integer
     */
    limit?: number;
    /**
     * The delay before dispatch task
     *
     * @minimum 0
     * @TJS-type integer
     */
    delay?: number;
  };
}

/**
 * The tasks in workflow (can not be empty)
 *
 * @minItems 1
 * @TJS-type array
 */
export type Tasks = AllTaskType[];

export interface ICompensateTask extends IBaseTask {
  /**
   * The task's name
   *
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-zA-Z0-9-_]+$
   * @TJS-type string
   */
  name: string;
  type: TaskTypes.Compensate;
}

export interface IParallelTask extends IBaseTask {
  type: TaskTypes.Parallel;
  /**
   * The list of tasks that run parallely
   *
   * @minItems 1
   * @TJS-type array
   */
  parallelTasks: Tasks[];
}

export interface IDecisionTask extends IBaseTask {
  type: TaskTypes.Decision;
  decisions: {
    [decision: string]: Tasks;
  };
  defaultDecision: Tasks;
}

export type AllTaskType =
  | ITaskTask
  | ICompensateTask
  | IParallelTask
  | IDecisionTask;

export interface IWorkflowDefinition {
  /**
   * The workflow's name
   *
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-zA-Z0-9-_]+$
   * @TJS-type string
   */
  name: string;
  /**
   * The workflow's revision
   *
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-zA-Z0-9-_]+$
   * @TJS-type string
   */
  rev: string;
  /**
   * The task's description
   *
   * @default -
   * @TJS-type string
   */
  description?: string;
  tasks: Tasks;
  /**
   * The workflow's failure strategies
   *
   * @default FAILED
   * @TJS-type string
   */
  failureStrategy?: WorkflowFailureStrategies;
  /**
   * Retry object
   *
   * @default {"limit":0}
   */
  retry?: {
    /**
     * Retry limit number (0 is no retry)
     *
     * @minimum 0
     * @default 0
     * @TJS-type integer
     */
    limit: number;
  };
  recoveryWorkflow?: IWorkflowRef;
  /**
   * The workflow's output mapping
   *
   * @default {}
   * @TJS-type object
   */
  outputParameters?: {
    [key: string]: string | any;
  };
}

const validateAllTaskReferenceName = (
  tasks: Tasks,
  path: (string | number)[] = [],
): string[] =>
  tasks.reduce((tasksReference: string[], task: AllTaskType, index: number) => {
    if (tasksReference.includes(task.taskReferenceName)) {
      throw [
        {
          dataPath: ['.tasks', ...path, index, 'taskReferenceName'].join('.'),
          keyword: 'uniq',
          message: "should have uniq property 'taskReferenceName'",
          params: {
            value: task.taskReferenceName,
          },
        },
      ];
    }

    switch (task.type) {
      case Task.TaskTypes.Decision:
        return [
          ...tasksReference,
          task.taskReferenceName,
          ...R.flatten(
            Object.keys(task.decisions).map((decisionCase: string) =>
              validateAllTaskReferenceName(task.decisions[decisionCase], [
                ...path,
                'decisions',
                decisionCase,
              ]),
            ),
          ),
          ...validateAllTaskReferenceName(task.defaultDecision, [
            ...path,
            'defaultDecision',
          ]),
        ];
      case Task.TaskTypes.Parallel:
        return [
          ...tasksReference,
          task.taskReferenceName,

          ...R.flatten(
            task.parallelTasks.map((Paralleltasks: Tasks, index: number) =>
              validateAllTaskReferenceName(Paralleltasks, [
                ...path,
                'parallelTasks',
                index,
              ]),
            ),
          ),
        ];
      case Task.TaskTypes.Compensate:
      case Task.TaskTypes.Task:
      default:
        return [...tasksReference, task.taskReferenceName];
    }
  }, []);

export class WorkflowDefinition implements IWorkflowDefinition {
  name: IWorkflowDefinition['name'];
  rev: IWorkflowDefinition['rev'];
  description: IWorkflowDefinition['description'];
  tasks: IWorkflowDefinition['tasks'];
  failureStrategy: IWorkflowDefinition['failureStrategy'];
  retry: IWorkflowDefinition['retry'];
  recoveryWorkflow: IWorkflowDefinition['recoveryWorkflow'];
  outputParameters: IWorkflowDefinition['outputParameters'];

  constructor(workflowDefinition: IWorkflowDefinition) {
    const result = validate(
      '#/definitions/IWorkflowDefinition',
      workflowDefinition,
    );

    validateAllTaskReferenceName(workflowDefinition.tasks);

    Object.assign(this, result);
  }
}
