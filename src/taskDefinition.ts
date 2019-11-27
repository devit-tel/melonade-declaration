import * as R from 'ramda';
import { validate } from './utils/common';

export interface ITaskDefinition {
  /**
   * The task name
   *
   * @minimum 4
   * @maximum 64
   * @pattern ^[a-zA-Z0-9-_]$
   * @TJS-type string
   */
  name: string;
  /**
   * The task's description
   *
   * @default -
   * @TJS-type string
   */
  description?: string;
  /**
   * The given time that task can ack before it timeout in miliseconds (0 is no timeout)
   *
   * @minimum 0
   * @default 0
   * @TJS-type Integer
   */
  ackTimeout?: number;
  /**
   * The given time that task can finish before it timeout in miliseconds (0 is no timeout)
   *
   * @minimum 0
   * @default 0
   * @TJS-type Integer
   */
  timeout?: number;
  /**
   * Retry object
   *
   * @default {"limit":0,"delay":0}
   */
  retry?: {
    /**
     * Retry limit number (0 is no retry)
     *
     * @minimum 0
     * @default 0
     * @TJS-type Integer
     */
    limit: number;
    /**
     * The delay before dispatch task
     *
     * @minimum 0
     * @default 0
     * @TJS-type Integer
     */
    delay: number;
  };
  document?: {
    /**
     * Embedded json schema
     *
     * @default {}
     */
    inputs?: object;
    /**
     * Embedded json schema
     *
     * @default 0
     */
    output?: object;
  };
}

export class TaskDefinition implements ITaskDefinition {
  name: ITaskDefinition['name'];
  description: ITaskDefinition['description'];
  ackTimeout: ITaskDefinition['ackTimeout'];
  timeout: ITaskDefinition['timeout'];
  retry: ITaskDefinition['retry'];
  document: ITaskDefinition['document'];

  constructor(taskDefinition: ITaskDefinition) {
    const result = validate('#/definitions/ITaskDefinition', taskDefinition);

    Object.assign(
      this,
      R.pick(
        ['name', 'description', 'ackTimeout', 'timeout', 'retry', 'document'],
        result,
      ),
    );
  }
}
