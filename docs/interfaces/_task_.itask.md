[@melonade/melonade-declaration - v0.8.0](../README.md) › [Globals](../globals.md) › ["task"](../modules/_task_.md) › [ITask](_task_.itask.md)

# Interface: ITask

## Hierarchy

* **ITask**

## Index

### Properties

* [ackTimeout](_task_.itask.md#acktimeout)
* [createTime](_task_.itask.md#createtime)
* [decisions](_task_.itask.md#optional-decisions)
* [defaultDecision](_task_.itask.md#optional-defaultdecision)
* [dynamicTasks](_task_.itask.md#optional-dynamictasks)
* [endTime](_task_.itask.md#endtime)
* [input](_task_.itask.md#input)
* [isRetried](_task_.itask.md#isretried)
* [logs](_task_.itask.md#optional-logs)
* [output](_task_.itask.md#output)
* [parallelTasks](_task_.itask.md#optional-paralleltasks)
* [retries](_task_.itask.md#retries)
* [retryDelay](_task_.itask.md#retrydelay)
* [startTime](_task_.itask.md#starttime)
* [status](_task_.itask.md#status)
* [syncWorker](_task_.itask.md#optional-syncworker)
* [taskId](_task_.itask.md#taskid)
* [taskName](_task_.itask.md#taskname)
* [taskPath](_task_.itask.md#taskpath)
* [taskReferenceName](_task_.itask.md#taskreferencename)
* [timeout](_task_.itask.md#timeout)
* [transactionId](_task_.itask.md#transactionid)
* [type](_task_.itask.md#type)
* [workflowId](_task_.itask.md#workflowid)

## Properties

###  ackTimeout

• **ackTimeout**: *number*

*Defined in [src/task.ts:49](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L49)*

___

###  createTime

• **createTime**: *number*

*Defined in [src/task.ts:37](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L37)*

___

### `Optional` decisions

• **decisions**? : *object*

*Defined in [src/task.ts:44](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L44)*

#### Type declaration:

* \[ **decision**: *string*\]: [AllTaskType](../modules/_workflowdefinition_.md#alltasktype)[]

___

### `Optional` defaultDecision

• **defaultDecision**? : *[AllTaskType](../modules/_workflowdefinition_.md#alltasktype)[]*

*Defined in [src/task.ts:47](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L47)*

___

### `Optional` dynamicTasks

• **dynamicTasks**? : *[AllTaskType](../modules/_workflowdefinition_.md#alltasktype)[]*

*Defined in [src/task.ts:43](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L43)*

___

###  endTime

• **endTime**: *number*

*Defined in [src/task.ts:39](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L39)*

___

###  input

• **input**: *any*

*Defined in [src/task.ts:35](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L35)*

___

###  isRetried

• **isRetried**: *boolean*

*Defined in [src/task.ts:34](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L34)*

___

### `Optional` logs

• **logs**? : *any[]*

*Defined in [src/task.ts:40](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L40)*

___

###  output

• **output**: *any*

*Defined in [src/task.ts:36](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L36)*

___

### `Optional` parallelTasks

• **parallelTasks**? : *[AllTaskType](../modules/_workflowdefinition_.md#alltasktype)[][]*

*Defined in [src/task.ts:42](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L42)*

___

###  retries

• **retries**: *number*

*Defined in [src/task.ts:33](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L33)*

___

###  retryDelay

• **retryDelay**: *number*

*Defined in [src/task.ts:48](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L48)*

___

###  startTime

• **startTime**: *number*

*Defined in [src/task.ts:38](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L38)*

___

###  status

• **status**: *[TaskStates](../enums/_state_.taskstates.md)*

*Defined in [src/task.ts:32](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L32)*

___

### `Optional` syncWorker

• **syncWorker**? : *boolean*

*Defined in [src/task.ts:60](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L60)*

The flag marked task as sync worker (worker that use sync api to update it's state)
Affect while cancel,or other task in parallel failed, and need to compensate
Workflow will start compensate without waiting for the task to finished

**`default`** false

**`tjs-type`** boolean

___

###  taskId

• **taskId**: *string*

*Defined in [src/task.ts:29](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L29)*

___

###  taskName

• **taskName**: *string*

*Defined in [src/task.ts:27](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L27)*

___

###  taskPath

• **taskPath**: *string | number[]*

*Defined in [src/task.ts:51](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L51)*

___

###  taskReferenceName

• **taskReferenceName**: *string*

*Defined in [src/task.ts:28](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L28)*

___

###  timeout

• **timeout**: *number*

*Defined in [src/task.ts:50](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L50)*

___

###  transactionId

• **transactionId**: *string*

*Defined in [src/task.ts:31](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L31)*

___

###  type

• **type**: *[TaskTypes](../enums/_task_.tasktypes.md)*

*Defined in [src/task.ts:41](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L41)*

___

###  workflowId

• **workflowId**: *string*

*Defined in [src/task.ts:30](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/task.ts#L30)*
