import { TaskStates } from './state';
import { AllTaskType } from './workflowDefinition';
import { enumToList } from './utils/common';

export enum TaskTypes {
  Task = 'TASK',
  Compensate = 'COMPENSATE',
  Parallel = 'PARALLEL',
  SubWorkflow = 'SUB_WORKFLOW',
  Decision = 'DECISION',
}

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
  workflow?: {
    name: string;
    rev: string;
  };
  decisions?: {
    [decision: string]: AllTaskType[];
  };
  defaultDecision?: AllTaskType[];
  retryDelay: number;
  ackTimeout: number;
  timeout: number;
}
