import { TransactionStates } from './state';
import { TaskTypes } from './task';
import { IWorkflowDefinition } from './workflowDefinition';

export interface ITransaction {
  transactionId: string;
  status: TransactionStates;
  input: any;
  output: any;
  createTime: number;
  endTime: number;
  workflowDefinition: IWorkflowDefinition;
  tags?: string[];
  parent?: {
    transactionId: string;
    taskId: string;
    taskType: TaskTypes.Task | TaskTypes.Compensate
  };
}
