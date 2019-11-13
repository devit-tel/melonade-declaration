import { WorkflowStates } from './state';
import { IWorkflowDefinition } from './workflowDefinition';

export enum WorkflowTypes {
  Workflow = 'WORKFLOW', // When Completed make transaction COMPLETED
  CompensateWorkflow = 'COMPENSATE_WORKFLOW', // When Completed Make Transaction CANCELLED
  CompensateThenRetryWorkflow = 'COMPENSATE_THEN_WORKFLOW', // When Completed Start original workflow
  CancelWorkflow = 'CANCEL_WORKFLOW',
}

export interface IWorkflow {
  transactionId: string;
  workflowId: string;
  type: WorkflowTypes;
  status: WorkflowStates;
  retries: number;
  input: {
    [key: string]: any;
  };
  output: {
    [key: string]: any;
  };
  createTime: number;
  startTime: number;
  endTime: number;
  workflowDefinition: IWorkflowDefinition;
}
