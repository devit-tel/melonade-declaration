import { ITransactionEvent } from './event';
import { ITransaction } from './transaction';

export enum StoreType {
  ZooKeeper = 'ZOOKEEPER', // Greate for Definition
  MongoDB = 'MONGODB',
  Redis = 'REDIS', // Greate for Instance
  Memory = 'MEMORY', // For Dev/Test, don't use in production
}

export interface IHistogramCount {
  date: number | Date;
  count: number;
}

export interface ITaskExecutionTime {
  executionTime: number;
  taskName: string;
}

export interface ITransactionEventPaginate {
  total: number;
  events: ITransactionEvent[];
}

export interface ITransactionPaginate {
  total: number;
  transactions: ITransaction[];
}
