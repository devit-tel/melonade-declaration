export enum CommandTypes {
  StartTransaction = 'START_TRANSACTION',
  CancelTransaction = 'CANCEL_TRANSACTION',
  PauseTransaction = 'PAUSE_TRANSACTION',
  ResumeTransaction = 'RESUME_TRANSACTION',
}

export interface ICommand {
  transactionId: string;
}

export interface IStartTransactionCommand extends ICommand {
  type: CommandTypes.StartTransaction;
  workflow: {
    name: string;
    rev: string;
  };
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

export type AllCommand =
  | IStartTransactionCommand
  | ICancelTransactionCommand
  | IPauseTransactionCommand
  | IResumeTransactionCommand;
