[@melonade/melonade-declaration - v0.8.0](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](_workflowdefinition_.md)

# External module: "workflowDefinition"

## Index

### Classes

* [WorkflowDefinition](../classes/_workflowdefinition_.workflowdefinition.md)

### Interfaces

* [IBaseTask](../interfaces/_workflowdefinition_.ibasetask.md)
* [ICompensateTask](../interfaces/_workflowdefinition_.icompensatetask.md)
* [IDecisionTask](../interfaces/_workflowdefinition_.idecisiontask.md)
* [IDynamicTask](../interfaces/_workflowdefinition_.idynamictask.md)
* [IParallelTask](../interfaces/_workflowdefinition_.iparalleltask.md)
* [IScheduleTask](../interfaces/_workflowdefinition_.ischeduletask.md)
* [ISubTransactionTask](../interfaces/_workflowdefinition_.isubtransactiontask.md)
* [ITaskTask](../interfaces/_workflowdefinition_.itasktask.md)
* [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md)
* [IWorkflowRef](../interfaces/_workflowdefinition_.iworkflowref.md)

### Type aliases

* [AllTaskType](_workflowdefinition_.md#alltasktype)
* [Tasks](_workflowdefinition_.md#tasks)

### Functions

* [checkDuplicateReferenceName](_workflowdefinition_.md#const-checkduplicatereferencename)
* [validateAllTaskReferenceName](_workflowdefinition_.md#const-validatealltaskreferencename)

## Type aliases

###  AllTaskType

Ƭ **AllTaskType**: *[ITaskTask](../interfaces/_workflowdefinition_.itasktask.md) | [ICompensateTask](../interfaces/_workflowdefinition_.icompensatetask.md) | [IParallelTask](../interfaces/_workflowdefinition_.iparalleltask.md) | [IDecisionTask](../interfaces/_workflowdefinition_.idecisiontask.md) | [IScheduleTask](../interfaces/_workflowdefinition_.ischeduletask.md) | [ISubTransactionTask](../interfaces/_workflowdefinition_.isubtransactiontask.md) | [IDynamicTask](../interfaces/_workflowdefinition_.idynamictask.md)*

*Defined in [src/workflowDefinition.ts:145](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L145)*

___

###  Tasks

Ƭ **Tasks**: *[AllTaskType](_workflowdefinition_.md#alltasktype)[]*

*Defined in [src/workflowDefinition.ts:84](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L84)*

The tasks in workflow (can not be empty)

**`minitems`** 1

**`tjs-type`** array

## Functions

### `Const` checkDuplicateReferenceName

▸ **checkDuplicateReferenceName**(`taskReferenceName`: string, `tasksReferenceName`: string[], `path`: string | number[]): *void*

*Defined in [src/workflowDefinition.ts:215](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L215)*

**Parameters:**

Name | Type |
------ | ------ |
`taskReferenceName` | string |
`tasksReferenceName` | string[] |
`path` | string &#124; number[] |

**Returns:** *void*

___

### `Const` validateAllTaskReferenceName

▸ **validateAllTaskReferenceName**(`tasks`: [Tasks](_workflowdefinition_.md#tasks), `path`: string | number[], `extraTasksReferenceName`: string[]): *string[]*

*Defined in [src/workflowDefinition.ts:233](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L233)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`tasks` | [Tasks](_workflowdefinition_.md#tasks) | - |
`path` | string &#124; number[] |  [] |
`extraTasksReferenceName` | string[] |  [] |

**Returns:** *string[]*
