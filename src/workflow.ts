import { WorkflowStates, WorkflowTypes } from './constants/workflow';
import { IWorkflowDefinition } from './workflowDefinition';

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
  childOf?: string;
}
