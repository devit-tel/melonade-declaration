[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["task"](../modules/_task_.md) › [ITask](_task_.itask.md)

# Interface: ITask

## Hierarchy

* **ITask**

## Index

### Properties

* [ackTimeout](_task_.itask.md#acktimeout)
* [createTime](_task_.itask.md#createtime)
* [decisions](_task_.itask.md#optional-decisions)
* [defaultDecision](_task_.itask.md#optional-defaultdecision)
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

*Defined in [src/task.ts:46](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L46)*

___

###  createTime

• **createTime**: *number*

*Defined in [src/task.ts:35](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L35)*

___

### `Optional` decisions

• **decisions**? : *object*

*Defined in [src/task.ts:41](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L41)*

#### Type declaration:

* \[ **decision**: *string*\]: [AllTaskType](../modules/_workflowdefinition_.md#alltasktype)[]

___

### `Optional` defaultDecision

• **defaultDecision**? : *[AllTaskType](../modules/_workflowdefinition_.md#alltasktype)[]*

*Defined in [src/task.ts:44](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L44)*

___

###  endTime

• **endTime**: *number*

*Defined in [src/task.ts:37](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L37)*

___

###  input

• **input**: *any*

*Defined in [src/task.ts:33](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L33)*

___

###  isRetried

• **isRetried**: *boolean*

*Defined in [src/task.ts:32](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L32)*

___

### `Optional` logs

• **logs**? : *any[]*

*Defined in [src/task.ts:38](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L38)*

___

###  output

• **output**: *any*

*Defined in [src/task.ts:34](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L34)*

___

### `Optional` parallelTasks

• **parallelTasks**? : *[AllTaskType](../modules/_workflowdefinition_.md#alltasktype)[][]*

*Defined in [src/task.ts:40](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L40)*

___

###  retries

• **retries**: *number*

*Defined in [src/task.ts:31](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L31)*

___

###  retryDelay

• **retryDelay**: *number*

*Defined in [src/task.ts:45](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L45)*

___

###  startTime

• **startTime**: *number*

*Defined in [src/task.ts:36](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L36)*

___

###  status

• **status**: *[TaskStates](../enums/_state_.taskstates.md)*

*Defined in [src/task.ts:30](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L30)*

___

###  taskId

• **taskId**: *string*

*Defined in [src/task.ts:27](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L27)*

___

###  taskName

• **taskName**: *string*

*Defined in [src/task.ts:25](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L25)*

___

###  taskPath

• **taskPath**: *string | number[]*

*Defined in [src/task.ts:48](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L48)*

___

###  taskReferenceName

• **taskReferenceName**: *string*

*Defined in [src/task.ts:26](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L26)*

___

###  timeout

• **timeout**: *number*

*Defined in [src/task.ts:47](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L47)*

___

###  transactionId

• **transactionId**: *string*

*Defined in [src/task.ts:29](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L29)*

___

###  type

• **type**: *[TaskTypes](../enums/_task_.tasktypes.md)*

*Defined in [src/task.ts:39](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L39)*

___

###  workflowId

• **workflowId**: *string*

*Defined in [src/task.ts:28](https://github.com/devit-tel/melonade-declaration/blob/3679b49/src/task.ts#L28)*
