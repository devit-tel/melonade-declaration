import { ITask } from './task';

export interface ITimerData {
  ackTimeout: number;
  timeout: number;
  delay: number;
  task: ITask;
}

export enum TimerType {
  delayTask = 'DELAY_TASK',
  cronWorkflow = 'CRON_WORKFLOW',
}

export interface IDelayTaskTimer {
  type: TimerType.delayTask;
  task: ITask;
}

export interface ICronWorkflowTimer {
  type: TimerType.cronWorkflow;
  cron: string;
  workflow: {};
}
