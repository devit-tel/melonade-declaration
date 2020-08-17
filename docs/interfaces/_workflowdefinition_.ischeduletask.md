[@melonade/melonade-declaration - v0.8.0](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [IScheduleTask](_workflowdefinition_.ischeduletask.md)

# Interface: IScheduleTask

## Hierarchy

* [IBaseTask](_workflowdefinition_.ibasetask.md)

  ↳ **IScheduleTask**

## Index

### Properties

* [inputParameters](_workflowdefinition_.ischeduletask.md#inputparameters)
* [taskReferenceName](_workflowdefinition_.ischeduletask.md#taskreferencename)
* [type](_workflowdefinition_.ischeduletask.md#type)

## Properties

###  inputParameters

• **inputParameters**: *object*

*Overrides [IBaseTask](_workflowdefinition_.ibasetask.md).[inputParameters](_workflowdefinition_.ibasetask.md#inputparameters)*

*Defined in [src/workflowDefinition.ts:119](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/workflowDefinition.ts#L119)*

#### Type declaration:

* **completedAfter**? : *number | string*

* **completedAt**? : *string*

* **completedWhen**? : *string*

___

###  taskReferenceName

• **taskReferenceName**: *string*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[taskReferenceName](_workflowdefinition_.ibasetask.md#taskreferencename)*

*Defined in [src/workflowDefinition.ts:21](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/workflowDefinition.ts#L21)*

The referance name using in workflow

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

###  type

• **type**: *[Schedule](../enums/_task_.tasktypes.md#schedule)*

*Defined in [src/workflowDefinition.ts:118](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/workflowDefinition.ts#L118)*
