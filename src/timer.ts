import { ITask } from './task';
import { IWorkflowRef } from './workflowDefinition';

export enum TimerTypes {
  delayTask = 'DELAY_TASK',
  cronWorkflow = 'CRON_WORKFLOW',
  scheduleTask = 'SCHEDULE_TASK',
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

export interface IScheduleTaskTimer {
  type: TimerTypes.scheduleTask;
  transactionId: string;
  taskId: string;
  completedAt: number;
}

export type AllTimerType =
  | IDelayTaskTimer
  | ICronWorkflowTimer
  | IScheduleTaskTimer;
