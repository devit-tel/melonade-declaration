import { ITask } from './task';
import { IWorkflowRef } from './workflowDefinition';

export enum CommandTypes {
  StartTransaction = 'START_TRANSACTION',
  CancelTransaction = 'CANCEL_TRANSACTION',
  PauseTransaction = 'PAUSE_TRANSACTION',
  ResumeTransaction = 'RESUME_TRANSACTION',
  ReloadTask = 'RELOAD_TASK',
}

export interface ICommand {
  transactionId: string;
}

export interface IStartTransactionCommand extends ICommand {
  type: CommandTypes.StartTransaction;
  workflow: IWorkflowRef;
  input: any;
}

export interface ICancelTransactionCommand extends ICommand {
  type: CommandTypes.CancelTransaction;
  reason: string;
}

export interface IPauseTransactionCommand extends ICommand {
  type: CommandTypes.PauseTransaction;
}

export interface IResumeTransactionCommand extends ICommand {
  type: CommandTypes.ResumeTransaction;
}

export interface IReloadTaskCommand extends ICommand {
  type: CommandTypes.ReloadTask;
  task: ITask;
}

export type AllCommand =
  | IStartTransactionCommand
  | ICancelTransactionCommand
  | IPauseTransactionCommand
  | IResumeTransactionCommand
  | IReloadTaskCommand;
