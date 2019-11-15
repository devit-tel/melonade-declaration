import * as R from 'ramda';
import { WorkflowFailureStrategies } from './state';
import { TaskTypes, TaskTypesList } from './task';
import { isNumber, isString, isValidName, isValidRev } from './utils/common';

export interface IWorkflowRef {
  name: string;
  rev: string;
}

export interface IBaseTask {
  taskReferenceName: string;
  inputParameters: {
    [key: string]: string | number;
  };
}

export interface ITaskTask extends IBaseTask {
  name: string;
  type: TaskTypes.Task;
  retry?: {
    limit: number;
    delay: number;
  };
  ackTimeout?: number;
  timeout?: number;
}

export interface ICompensateTask extends IBaseTask {
  name: string;
  type: TaskTypes.Compensate;
}

export interface IParallelTask extends IBaseTask {
  type: TaskTypes.Parallel;
  parallelTasks: AllTaskType[][];
}

export interface IDecisionTask extends IBaseTask {
  type: TaskTypes.Decision;
  decisions: {
    [decision: string]: AllTaskType[];
  };
  defaultDecision: AllTaskType[];
}

export type AllTaskType =
  | ITaskTask
  | ICompensateTask
  | IParallelTask
  | IDecisionTask;

export interface IWorkflowDefinition {
  name: string;
  rev: string;
  description?: string;
  tasks: AllTaskType[];
  failureStrategy: WorkflowFailureStrategies;
  retry?: {
    limit: number;
  };
  recoveryWorkflow?: IWorkflowRef;
  outputParameters: {
    [key: string]: string | any;
  };
}

const isRecoveryWorkflowConfigValid = (
  workflowDefinition: IWorkflowDefinition,
): boolean =>
  workflowDefinition.failureStrategy ===
    WorkflowFailureStrategies.RecoveryWorkflow &&
  (!isString(R.path(['recoveryWorkflow', 'name'], workflowDefinition)) ||
    !isString(R.path(['recoveryWorkflow', 'rev'], workflowDefinition)));

const isFailureStrategiesConfigValid = (
  workflowDefinition: IWorkflowDefinition,
): boolean =>
  workflowDefinition.failureStrategy === WorkflowFailureStrategies.Retry &&
  (!isNumber(R.path(['retry', 'limit'], workflowDefinition)) ||
    !isNumber(R.path(['retry', 'delay'], workflowDefinition)));

const isEmptyTasks = R.compose(
  R.isEmpty,
  R.prop('tasks'),
);

const getTaskDecisions = R.compose(
  R.toPairs,
  R.propOr({}, 'decisions'),
);

interface TasksValidateOutput {
  errors: string[];
  taskReferenceName: {
    [taskName: string]: string;
  };
}

// Recursively validate tasks
// tslint:disable-next-line: max-func-body-length
const validateTasks = (
  tasks: AllTaskType[],
  root: string,
  defaultResult: TasksValidateOutput,
) => {
  if (!tasks.length) {
    defaultResult.errors.push(`${root} cannot empty`);
    return defaultResult;
  }

  return tasks.reduce(
    (
      result: TasksValidateOutput,
      task: AllTaskType,
      index: number,
    ): TasksValidateOutput => {
      const currentRoot = `${root}.tasks[${index}]`;
      if (!isValidName(task.name) && task.type === TaskTypes.Task)
        result.errors.push(`${currentRoot}.name is invalid`);

      if (!isValidName(task.taskReferenceName))
        result.errors.push(`${currentRoot}.taskReferenceName is invalid`);

      if (result.taskReferenceName[task.taskReferenceName])
        result.errors.push(`${currentRoot}.taskReferenceName is duplicated`);
      else
        result.taskReferenceName[task.taskReferenceName] =
          task.taskReferenceName;

      if (!TaskTypesList.includes(task.type))
        result.errors.push(`${currentRoot}.type is invalid`);

      if (task.type === TaskTypes.Decision) {
        const defaultDecision: AllTaskType[] = R.propOr(
          [],
          'defaultDecision',
          task,
        );
        if (R.isEmpty(defaultDecision))
          result.errors.push(`${currentRoot}.defaultDecision cannot be empty`);

        const defaultDecisionResult = validateTasks(
          defaultDecision,
          `${currentRoot}.defaultDecision`,
          result,
        );

        return getTaskDecisions(task).reduce(
          (
            decisionResult: TasksValidateOutput,
            [decision, decisionTasks]: [string, AllTaskType[]],
          ): TasksValidateOutput => {
            return validateTasks(
              decisionTasks,
              `${currentRoot}.decisions["${decision}"]`,
              decisionResult,
            );
          },
          defaultDecisionResult,
        );
      }

      if (task.type === TaskTypes.Parallel) {
        const parallelTasks: AllTaskType[][] = R.propOr(
          [],
          'parallelTasks',
          task,
        );

        if (!parallelTasks.length) {
          result.errors.push(`${currentRoot}.parallelTasks cannot empty`);
        }

        return parallelTasks.reduce(
          (
            parallelResult: TasksValidateOutput,
            parallelTasks: AllTaskType[],
            index: number,
          ): TasksValidateOutput => {
            return validateTasks(
              parallelTasks,
              `${currentRoot}.parallelTasks[${index}]`,
              parallelResult,
            );
          },
          result,
        );
      }

      return result;
    },
    defaultResult,
  );
};

const workflowValidation = (
  workflowDefinition: IWorkflowDefinition,
): string[] => {
  const errors = [];
  if (!isValidName(workflowDefinition.name))
    errors.push('workflowDefinition.name is invalid');

  if (!isValidRev(workflowDefinition.rev))
    errors.push('workflowDefinition.rev is invalid');

  if (isRecoveryWorkflowConfigValid(workflowDefinition))
    errors.push('workflowDefinition.recoveryWorkflow is invalid');

  if (isFailureStrategiesConfigValid(workflowDefinition))
    errors.push('workflowDefinition.retry is invalid');

  if (isEmptyTasks(workflowDefinition))
    errors.push('workflowDefinition.tasks cannot be empty');

  return errors;
};

export class WorkflowDefinition implements IWorkflowDefinition {
  name: string;
  rev: string;
  description?: string = 'No description';
  tasks: AllTaskType[];
  failureStrategy: WorkflowFailureStrategies;
  retry?: {
    limit: number;
  };
  recoveryWorkflow?: IWorkflowRef;
  outputParameters: {};

  constructor(workflowDefinition: IWorkflowDefinition) {
    const workflowValidationErrors = workflowValidation(workflowDefinition);

    const validateTasksResult = validateTasks(
      R.propOr([], 'tasks', workflowDefinition),
      'workflowDefinition',
      {
        errors: workflowValidationErrors,
        taskReferenceName: {},
      },
    );
    if (validateTasksResult.errors.length)
      throw new Error(validateTasksResult.errors.join('\n'));

    Object.assign(
      this,
      R.pick(
        [
          'name',
          'rev',
          'description',
          'tasks',
          'failureStrategy',
          'retry',
          'recoveryWorkflow',
          'outputParameters',
        ],
        workflowDefinition,
      ),
    );
  }
}
