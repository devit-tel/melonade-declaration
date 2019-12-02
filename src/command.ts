import { ITask } from './task';
import { IWorkflowRef } from './workflowDefinition';

export enum CommandTypes {
  StartTransaction = 'START_TRANSACTION',
  CancelTransaction = 'CANCEL_TRANSACTION',
  PauseTransaction = 'PAUSE_TRANSACTION',
  ResumeTransaction = 'RESUME_TRANSACTION',
  ReloadTask = 'RELOAD_TASK',
}

export interface IBaseCommand {
  transactionId: string;
}

export interface IStartTransactionCommand extends IBaseCommand {
  type: CommandTypes.StartTransaction;
  workflow: IWorkflowRef;
  input: any;
}

export interface ICancelTransactionCommand extends IBaseCommand {
  type: CommandTypes.CancelTransaction;
  reason: string;
}

export interface IPauseTransactionCommand extends IBaseCommand {
  type: CommandTypes.PauseTransaction;
}

export interface IResumeTransactionCommand extends IBaseCommand {
  type: CommandTypes.ResumeTransaction;
}

export interface IReloadTaskCommand extends IBaseCommand {
  type: CommandTypes.ReloadTask;
  task: ITask;
}

export type AllCommand =
  | IStartTransactionCommand
  | ICancelTransactionCommand
  | IPauseTransactionCommand
  | IResumeTransactionCommand
  | IReloadTaskCommand;
