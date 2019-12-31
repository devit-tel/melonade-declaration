import { ITask } from './task';
import { IWorkflowRef } from './workflowDefinition';

export enum TimerTypes {
  delayTask = 'DELAY_TASK',
  cronWorkflow = 'CRON_WORKFLOW',
}

export interface IDelayTaskTimer {
  type: TimerTypes.delayTask;
  task: ITask;
}

export interface ICronWorkflowTimer {
  type: TimerTypes.cronWorkflow;
  cron: string;
  workflow: IWorkflowRef;
}

export type AllTimerType = IDelayTaskTimer | ICronWorkflowTimer;
