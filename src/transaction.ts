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
}
