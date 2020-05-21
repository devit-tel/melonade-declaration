import * as R from 'ramda';
import { Task } from '.';
import { WorkflowFailureStrategies } from './state';
import { TaskTypes } from './task';
import { validate, workflowDefinitionSchema } from './utils/common';

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
  inputParameters: any;
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

export interface IDynamicTask extends IBaseTask {
  type: TaskTypes.DynamicTask;
  /**
   * The list of tasks that create dynamically
   *
   * @minItems 0
   * @TJS-type array
   */
  dynamicTasks: AllTaskType[];
  inputParameters: {
    tasks?: string;
  };
}

export interface IDecisionTask extends IBaseTask {
  type: TaskTypes.Decision;
  decisions: {
    [decision: string]: Tasks;
  };
  defaultDecision: Tasks;
  inputParameters: {
    case?: string;
  };
}

export interface IScheduleTask extends IBaseTask {
  type: TaskTypes.Schedule;
  inputParameters: {
    completedAfter?: number | string;
    completedAt?: string;
    completedWhen?: string;
  };
}

export interface ISubTransactionTask extends IBaseTask {
  type: TaskTypes.SubTransaction;
  inputParameters: {
    workflowName: string;
    workflowRev: string;
    input?: any;
  };
}

export type AllTaskType =
  | ITaskTask
  | ICompensateTask
  | IParallelTask
  | IDecisionTask
  | IScheduleTask
  | ISubTransactionTask
  | IDynamicTask;

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
   * The workflow's description
   *
   * @default "-"
   * @TJS-type string
   */
  description?: string;
  tasks: Tasks;
  /**
   * The workflow's failure strategies
   *
   * @default "FAILED"
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

const checkDuplicateReferenceName = (
  taskReferenceName: string,
  tasksReferenceName: string[],
  path: (string | number)[],
) => {
  if (tasksReferenceName.includes(taskReferenceName))
    throw JSON.stringify([
      {
        dataPath: ['.tasks', ...path, 'taskReferenceName'].join('.'),
        keyword: 'uniq',
        message: "should have uniq property 'taskReferenceName'",
        params: {
          value: taskReferenceName,
        },
      },
    ]);
};

export const validateAllTaskReferenceName = (
  tasks: Tasks,
  path: (string | number)[] = [],
  extraTasksReferenceName: string[] = [],
): string[] =>
  tasks.reduce(
    (tasksReferenceName: string[], task: AllTaskType, index: number) => {
      const currentPath = [...path, index];
      checkDuplicateReferenceName(
        task.taskReferenceName,
        [...tasksReferenceName, ...extraTasksReferenceName],
        currentPath,
      );

      switch (task.type) {
        // This's important diffirent case can have same ReferenceName
        case Task.TaskTypes.Decision:
          const defaultDecisionsReferenceName = validateAllTaskReferenceName(
            task.defaultDecision,
            [...currentPath, 'defaultDecision'],
            tasksReferenceName,
          );

          const eachDecisionsNames = Object.keys(
            task.decisions,
          ).map((decisionCase: string) =>
            validateAllTaskReferenceName(
              task.decisions[decisionCase],
              [...currentPath, 'decisions', decisionCase],
              tasksReferenceName,
            ),
          );

          checkDuplicateReferenceName(
            task.taskReferenceName,
            defaultDecisionsReferenceName,
            currentPath,
          );
          eachDecisionsNames.forEach((eachDecisionsName: string[]) =>
            checkDuplicateReferenceName(
              task.taskReferenceName,
              eachDecisionsName,
              currentPath,
            ),
          );

          return [
            ...tasksReferenceName,
            task.taskReferenceName,
            ...R.flatten(eachDecisionsNames),
            ...defaultDecisionsReferenceName,
          ];
        case Task.TaskTypes.Parallel:
          const allParallelReferenceNames = R.flatten(
            task.parallelTasks.reduce(
              (
                parallelReferenceNames: string[],
                paralleltasks: Tasks,
                index: number,
              ) => [
                ...parallelReferenceNames,
                ...validateAllTaskReferenceName(
                  paralleltasks,
                  [...currentPath, 'parallelTasks', index],
                  parallelReferenceNames,
                ),
              ],
              [],
            ),
          );
          checkDuplicateReferenceName(
            task.taskReferenceName,
            allParallelReferenceNames,
            currentPath,
          );

          return [
            ...tasksReferenceName,
            task.taskReferenceName,
            ...allParallelReferenceNames,
          ];
        case Task.TaskTypes.DynamicTask:
          const dynamicTaskReferenceNames = task.dynamicTasks
            ? validateAllTaskReferenceName(
                task.dynamicTasks,
                [...currentPath, 'dynamicTasks'],
                tasksReferenceName,
              )
            : [];

          checkDuplicateReferenceName(
            task.taskReferenceName,
            dynamicTaskReferenceNames,
            currentPath,
          );
          return [
            ...tasksReferenceName,
            task.taskReferenceName,
            ...dynamicTaskReferenceNames,
          ];
        case Task.TaskTypes.Compensate:
        case Task.TaskTypes.Task:
        case Task.TaskTypes.Schedule:
        case Task.TaskTypes.SubTransaction:
        default:
          return [...tasksReferenceName, task.taskReferenceName];
      }
    },
    [],
  );

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
    const result = validate(workflowDefinitionSchema, workflowDefinition);

    validateAllTaskReferenceName(workflowDefinition.tasks);

    Object.assign(this, result);
  }
}
