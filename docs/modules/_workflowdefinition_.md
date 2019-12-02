[@melonade/melonade-declaration](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](_workflowdefinition_.md)

# External module: "workflowDefinition"

## Index

### Classes

* [WorkflowDefinition](../classes/_workflowdefinition_.workflowdefinition.md)

### Interfaces

* [IBaseTask](../interfaces/_workflowdefinition_.ibasetask.md)
* [ICompensateTask](../interfaces/_workflowdefinition_.icompensatetask.md)
* [IDecisionTask](../interfaces/_workflowdefinition_.idecisiontask.md)
* [IParallelTask](../interfaces/_workflowdefinition_.iparalleltask.md)
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

Ƭ **AllTaskType**: *[ITaskTask](../interfaces/_workflowdefinition_.itasktask.md) | [ICompensateTask](../interfaces/_workflowdefinition_.icompensatetask.md) | [IParallelTask](../interfaces/_workflowdefinition_.iparalleltask.md) | [IDecisionTask](../interfaces/_workflowdefinition_.idecisiontask.md)*

*Defined in [src/workflowDefinition.ts:119](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L119)*

___

###  Tasks

Ƭ **Tasks**: *[AllTaskType](_workflowdefinition_.md#alltasktype)[]*

*Defined in [src/workflowDefinition.ts:85](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L85)*

The tasks in workflow (can not be empty)

**`minitems`** 1

**`tjs-type`** array

## Functions

### `Const` checkDuplicateReferenceName

▸ **checkDuplicateReferenceName**(`taskReferenceName`: string, `tasksReferenceName`: string[], `path`: string | number[]): *void*

*Defined in [src/workflowDefinition.ts:186](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L186)*

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

*Defined in [src/workflowDefinition.ts:204](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L204)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`tasks` | [Tasks](_workflowdefinition_.md#tasks) | - |
`path` | string &#124; number[] |  [] |
`extraTasksReferenceName` | string[] |  [] |

**Returns:** *string[]*
