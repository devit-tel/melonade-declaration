import { TaskStates } from './state';
import { enumToList } from './utils/common';
import { AllTaskType } from './workflowDefinition';

export enum TaskTypes {
  Task = 'TASK',
  Compensate = 'COMPENSATE',
  Parallel = 'PARALLEL',
  Decision = 'DECISION',
  Schedule = 'SCHEDULE',
}

export const SYSTEM_TASKS = [
  TaskTypes.Parallel,
  TaskTypes.Decision,
  TaskTypes.Schedule,
];
export const WORKER_TASKS = [TaskTypes.Task, TaskTypes.Compensate];

export const TaskTypesList = enumToList(TaskTypes);

export interface ITask {
  taskName: string;
  taskReferenceName: string;
  taskId: string;
  workflowId: string;
  transactionId: string;
  status: TaskStates;
  retries: number;
  isRetried: boolean;
  input: any;
  output: any;
  createTime: number; // time that push into Kafka
  startTime: number; // time that worker ack
  endTime: number; // time that task finish/failed/cancel
  logs?: any[];
  type: TaskTypes;
  parallelTasks?: AllTaskType[][];
  decisions?: {
    [decision: string]: AllTaskType[];
  };
  defaultDecision?: AllTaskType[];
  retryDelay: number;
  ackTimeout: number;
  timeout: number;
}
