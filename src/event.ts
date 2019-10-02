import { ITask } from './task';
import { IWorkflow } from './workflow';
import { ITransaction } from './transaction';
import { TransactionStates } from './constants/transaction';
import { WorkflowStates } from './constants/workflow';
import { TaskStates } from './constants/task';

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

export interface ITaskUpdate {
  transactionId: string;
  taskId: string;
  status: TaskStates;
  output?: any;
  logs?: any[] | any;
  isSystem: boolean;
}

export interface IEvent {
  transactionId: string;
  type: 'TRANSACTION' | 'WORKFLOW' | 'TASK' | 'SYSTEM';
  details?:
    | ITransaction
    | IWorkflow
    | ITask
    | ITransactionUpdate
    | IWorkflowUpdate
    | ITaskUpdate;
  timestamp: number;
  isError: boolean;
  error?: string;
}
