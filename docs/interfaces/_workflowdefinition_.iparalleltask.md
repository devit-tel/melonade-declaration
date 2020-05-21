[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [IParallelTask](_workflowdefinition_.iparalleltask.md)

# Interface: IParallelTask

## Hierarchy

* [IBaseTask](_workflowdefinition_.ibasetask.md)

  ↳ **IParallelTask**

## Index

### Properties

* [inputParameters](_workflowdefinition_.iparalleltask.md#inputparameters)
* [parallelTasks](_workflowdefinition_.iparalleltask.md#paralleltasks)
* [taskReferenceName](_workflowdefinition_.iparalleltask.md#taskreferencename)
* [type](_workflowdefinition_.iparalleltask.md#type)

## Properties

###  inputParameters

• **inputParameters**: *any*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[inputParameters](_workflowdefinition_.ibasetask.md#inputparameters)*

*Defined in [src/workflowDefinition.ts:27](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/workflowDefinition.ts#L27)*

The input to be mapping to workflow's data

**`tjs-type`** object

___

###  parallelTasks

• **parallelTasks**: *[Tasks](../modules/_workflowdefinition_.md#tasks)[]*

*Defined in [src/workflowDefinition.ts:106](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/workflowDefinition.ts#L106)*

The list of tasks that run parallely

**`minitems`** 1

**`tjs-type`** array

___

###  taskReferenceName

• **taskReferenceName**: *string*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[taskReferenceName](_workflowdefinition_.ibasetask.md#taskreferencename)*

*Defined in [src/workflowDefinition.ts:21](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/workflowDefinition.ts#L21)*

The referance name using in workflow

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

###  type

• **type**: *[Parallel](../enums/_task_.tasktypes.md#parallel)*

*Defined in [src/workflowDefinition.ts:99](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/workflowDefinition.ts#L99)*
