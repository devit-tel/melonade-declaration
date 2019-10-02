import * as R from 'ramda';
import { isValidName, isNumber } from './utils/common';

interface IDocIO {
  field: string;
  type: 'string' | 'number' | 'mixed';
  description: string;
  required?: boolean;
}

export interface ITaskDefinition {
  name: string;
  description?: string;
  ackTimeout?: number;
  timeout?: number;
  retry?: {
    limit: number;
    delay: number;
  };
  document?: {
    inputs?: IDocIO[];
    output?: IDocIO[];
  };
}

const isRetryValid = (taskDefinition: ITaskDefinition): boolean =>
  taskDefinition.retry &&
  (!isNumber(R.path(['retry', 'limit'], taskDefinition)) ||
    !isNumber(R.path(['retry', 'delay'], taskDefinition)));

const taskValidation = (taskDefinition: ITaskDefinition): string[] => {
  const errors = [];
  if (!isValidName(taskDefinition.name))
    errors.push('taskDefinition.name is invalid');

  if (isRetryValid(TaskDefinition))
    errors.push('taskDefinition.retry is invalid');

  if (taskDefinition.ackTimeout && !isNumber(taskDefinition.ackTimeout))
    errors.push('taskDefinition.ackTimeout is invalid');

  if (taskDefinition.timeout && !isNumber(taskDefinition.timeout))
    errors.push('taskDefinition.timeout is invalid');

  return errors;
};

export class TaskDefinition implements ITaskDefinition {
  name: string;
  description: string = 'No description';
  ackTimeout: number = 0;
  timeout: number = 0;
  retry: ITaskDefinition['retry'] = {
    limit: 0,
    delay: 1000,
  };
  document: ITaskDefinition['document'] = {
    inputs: [],
    output: [],
  };

  constructor(taskDefinition: ITaskDefinition) {
    const taskValidationErrors = taskValidation(taskDefinition);

    if (taskValidationErrors.length)
      throw new Error(taskValidationErrors.join('\n'));

    Object.assign(
      this,
      R.pick(
        ['name', 'description', 'ackTimeout', 'timeout', 'retry', 'document'],
        taskDefinition,
      ),
    );
  }
}
