import { taskDefinitionSchema, validate } from './utils/common';

export interface ITaskDefinition {
  /**
   * The task's name
   *
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-zA-Z0-9-_]+$
   * @TJS-type string
   */
  name: string;
  /**
   * The task's description
   *
   * @default "-"
   * @TJS-type string
   */
  description?: string;
  /**
   * The given time that task can ack before it timeout in miliseconds (0 is no timeout)
   *
   * @minimum 0
   * @default 0
   * @TJS-type integer
   */
  ackTimeout?: number;
  /**
   * The given time that task can finish before it timeout in miliseconds (0 is no timeout)
   *
   * @minimum 0
   * @default 0
   * @TJS-type integer
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
     * @TJS-type integer
     */
    limit: number;
    /**
     * The delay before dispatch task
     *
     * @minimum 0
     * @default 0
     * @TJS-type integer
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
  /**
   * The flag marked task as sync worker (worker that use sync api to update it's state)
   * Affect while cancel,or other task in parallel failed, and need to compensate
   * Workflow will start compensate without waiting for the task to finished
   *
   * @default false
   * @TJS-type boolean
   */
  syncWorker?: boolean;
}

export class TaskDefinition implements ITaskDefinition {
  name: ITaskDefinition['name'];
  description: ITaskDefinition['description'];
  ackTimeout: ITaskDefinition['ackTimeout'];
  timeout: ITaskDefinition['timeout'];
  retry: ITaskDefinition['retry'];
  document: ITaskDefinition['document'];

  constructor(taskDefinition: ITaskDefinition) {
    const result = validate(taskDefinitionSchema, taskDefinition);

    Object.assign(this, result);
  }
}
