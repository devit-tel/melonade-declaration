import { getPrevState } from './utils/constant';

// Transaction

export enum TransactionStates {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Running = 'RUNNING',
  Paused = 'PAUSED',
  Cancelled = 'CANCELLED',
  Compensated = 'COMPENSATED',
}

export const TransactionNextStates = {
  [TransactionStates.Completed]: [
    TransactionStates.Cancelled, // For cancel after transaction completed
  ],
  [TransactionStates.Failed]: [],
  [TransactionStates.Running]: [
    TransactionStates.Completed,
    TransactionStates.Failed,
    TransactionStates.Running,
    TransactionStates.Paused,
    TransactionStates.Cancelled,
    TransactionStates.Compensated,
  ],
  [TransactionStates.Paused]: [
    TransactionStates.Completed,
    TransactionStates.Failed,
    TransactionStates.Running,
    TransactionStates.Cancelled,
    TransactionStates.Compensated,
  ],
  [TransactionStates.Cancelled]: [],
  [TransactionStates.Compensated]: [],
};

const transactionPrevStateGetter = getPrevState(TransactionNextStates);

export const TransactionPrevStates = {
  [TransactionStates.Completed]: transactionPrevStateGetter(
    TransactionStates.Completed,
  ),
  [TransactionStates.Failed]: transactionPrevStateGetter(
    TransactionStates.Failed,
  ),
  [TransactionStates.Running]: transactionPrevStateGetter(
    TransactionStates.Running,
  ),
  [TransactionStates.Paused]: transactionPrevStateGetter(
    TransactionStates.Paused,
  ),
  [TransactionStates.Cancelled]: transactionPrevStateGetter(
    TransactionStates.Cancelled,
  ),
  [TransactionStates.Compensated]: transactionPrevStateGetter(
    TransactionStates.Compensated,
  ),
};

export enum WorkflowStates {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Timeout = 'TIMEOUT',
  Running = 'RUNNING',
  Paused = 'PAUSED',
  Cancelled = 'CANCELLED',
}

export enum WorkflowFailureStrategies {
  Failed = 'FAILED',
  RecoveryWorkflow = 'RECOVERY_WORKFLOW',
  Retry = 'RETRY',
  Compensate = 'COMPENSATE',
  CompensateThenRetry = 'COMPENSATE_THEN_RETRY',
}

export const WorkflowNextStates = {
  [WorkflowStates.Completed]: [],
  [WorkflowStates.Failed]: [],
  [WorkflowStates.Timeout]: [],
  [WorkflowStates.Running]: [
    WorkflowStates.Completed,
    WorkflowStates.Failed,
    WorkflowStates.Running,
    WorkflowStates.Timeout,
    WorkflowStates.Paused,
    WorkflowStates.Cancelled,
  ],
  [WorkflowStates.Paused]: [
    WorkflowStates.Completed,
    WorkflowStates.Failed,
    WorkflowStates.Running,
    WorkflowStates.Timeout,
    WorkflowStates.Cancelled,
  ],
  [WorkflowStates.Cancelled]: [],
};

const workflowPrevStateGetter = getPrevState(WorkflowNextStates);

export const WorkflowPrevStates = {
  [WorkflowStates.Completed]: workflowPrevStateGetter(WorkflowStates.Completed),
  [WorkflowStates.Failed]: workflowPrevStateGetter(WorkflowStates.Failed),
  [WorkflowStates.Timeout]: workflowPrevStateGetter(WorkflowStates.Timeout),
  [WorkflowStates.Running]: workflowPrevStateGetter(WorkflowStates.Running),
  [WorkflowStates.Paused]: workflowPrevStateGetter(WorkflowStates.Paused),
  [WorkflowStates.Cancelled]: workflowPrevStateGetter(WorkflowStates.Cancelled),
};

export enum TaskStates {
  Scheduled = 'SCHEDULED',
  Inprogress = 'INPROGRESS',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Timeout = 'TIMEOUT',
  AckTimeOut = 'ACK_TIMEOUT',
}

export const TaskNextStates = {
  [TaskStates.Scheduled]: [TaskStates.Inprogress],
  [TaskStates.Inprogress]: [
    TaskStates.Completed,
    TaskStates.Failed,
    TaskStates.Inprogress,
  ],
  [TaskStates.Completed]: [],
  [TaskStates.Failed]: [],
  [TaskStates.Timeout]: [],
  [TaskStates.AckTimeOut]: [],
};

const taskPrevStateGetter = getPrevState(TaskNextStates);

export const TaskPrevStates = {
  [TaskStates.Scheduled]: taskPrevStateGetter(TaskStates.Scheduled),
  [TaskStates.Inprogress]: taskPrevStateGetter(TaskStates.Inprogress),
  [TaskStates.Completed]: taskPrevStateGetter(TaskStates.Completed),
  [TaskStates.Failed]: taskPrevStateGetter(TaskStates.Failed),
  [TaskStates.Timeout]: taskPrevStateGetter(TaskStates.Timeout),
  [TaskStates.AckTimeOut]: taskPrevStateGetter(TaskStates.AckTimeOut),
};

export const TaskNextStatesSystem = {
  [TaskStates.Scheduled]: [
    TaskStates.Inprogress,
    TaskStates.Completed,
    TaskStates.Failed,
    TaskStates.Timeout,
    TaskStates.AckTimeOut,
  ],
  [TaskStates.Inprogress]: [
    TaskStates.Inprogress,
    TaskStates.Completed,
    TaskStates.Failed,
    TaskStates.Timeout,
  ],
  [TaskStates.Completed]: [],
  [TaskStates.Failed]: [],
  [TaskStates.Timeout]: [],
  [TaskStates.AckTimeOut]: [],
};

const systemTaskPrevStateGetter = getPrevState(TaskNextStatesSystem);

export const SystemTaskPrevStates = {
  [TaskStates.Scheduled]: systemTaskPrevStateGetter(TaskStates.Scheduled),
  [TaskStates.Inprogress]: systemTaskPrevStateGetter(TaskStates.Inprogress),
  [TaskStates.Completed]: systemTaskPrevStateGetter(TaskStates.Completed),
  [TaskStates.Failed]: systemTaskPrevStateGetter(TaskStates.Failed),
  [TaskStates.Timeout]: systemTaskPrevStateGetter(TaskStates.Timeout),
  [TaskStates.AckTimeOut]: systemTaskPrevStateGetter(TaskStates.AckTimeOut),
};
