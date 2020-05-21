import { TaskStates, TransactionStates, WorkflowStates } from './state';
import { ITask } from './task';
import { ITransaction } from './transaction';
import { IWorkflow } from './workflow';
import { IWorkflowDefinition } from './workflowDefinition';

export interface ITransactionUpdate {
  transactionId: string;
  status: TransactionStates;
  output?: any;
}

export interface IWorkflowUpdate {
  transactionId: string;
  workflowId: string;
  status: WorkflowStates;
  output?: any;
}

export interface IWorkflowDefinitionUpdate {
  transactionId: string;
  workflowId: string;
  workflowDefinition: IWorkflowDefinition;
  output?: any;
}

export interface ITaskUpdate {
  transactionId: string;
  taskId: string;
  status: TaskStates;
  output?: any;
  logs?: any[] | any;
  isSystem?: boolean;
  doNotRetry?: boolean;
}

interface IBaseEvent {
  transactionId: string;
  timestamp: number;
}

export interface ITransactionEvent extends IBaseEvent {
  type: 'TRANSACTION';
  details: ITransaction;
  isError: false;
}

export interface ITransactionErrorEvent extends IBaseEvent {
  type: 'TRANSACTION';
  details: ITransactionUpdate;
  isError: true;
  error: string;
}

export interface IWorkflowEvent extends IBaseEvent {
  type: 'WORKFLOW';
  details: IWorkflow;
  isError: false;
}

export interface IWorkflowErrorEvent extends IBaseEvent {
  type: 'WORKFLOW';
  details: IWorkflowUpdate;
  isError: true;
  error: string;
}

export interface ITaskEvent extends IBaseEvent {
  type: 'TASK';
  details: ITask;
  isError: false;
}

export interface ITaskErrorEvent extends IBaseEvent {
  type: 'TASK';
  details: ITaskUpdate;
  isError: true;
  error: string;
}

export interface ISystemEvent extends IBaseEvent {
  type: 'SYSTEM';
  details: any;
  isError: false;
}

export interface ISystemErrorEvent extends IBaseEvent {
  type: 'SYSTEM';
  details: any;
  isError: true;
  error: string;
}

export type AllEvent =
  | ITransactionEvent
  | ITransactionErrorEvent
  | IWorkflowEvent
  | IWorkflowErrorEvent
  | ITaskEvent
  | ITaskErrorEvent
  | ISystemEvent
  | ISystemErrorEvent;
