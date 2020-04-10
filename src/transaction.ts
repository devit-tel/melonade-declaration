import { TransactionStates } from './state';
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
    isCompensate: boolean; // If the parent task is compensate
    depth: number; // depth of sub transaction (depth = 2 if it's child of child of parent) ~main transaction level = 0 and ++
  };
}
