[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [IDynamicTask](_workflowdefinition_.idynamictask.md)

# Interface: IDynamicTask

## Hierarchy

* [IBaseTask](_workflowdefinition_.ibasetask.md)

  ↳ **IDynamicTask**

## Index

### Properties

* [dynamicTasks](_workflowdefinition_.idynamictask.md#dynamictasks)
* [inputParameters](_workflowdefinition_.idynamictask.md#inputparameters)
* [taskReferenceName](_workflowdefinition_.idynamictask.md#taskreferencename)
* [type](_workflowdefinition_.idynamictask.md#type)

## Properties

###  dynamicTasks

• **dynamicTasks**: *[Tasks](../modules/_workflowdefinition_.md#tasks)*

*Defined in [src/workflowDefinition.ts:117](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/workflowDefinition.ts#L117)*

The list of tasks that create dynamically

**`minitems`** 0

**`tjs-type`** array

___

###  inputParameters

• **inputParameters**: *object*

*Overrides [IBaseTask](_workflowdefinition_.ibasetask.md).[inputParameters](_workflowdefinition_.ibasetask.md#inputparameters)*

*Defined in [src/workflowDefinition.ts:118](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/workflowDefinition.ts#L118)*

#### Type declaration:

* **tasks**? : *string*

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

• **type**: *[DynamicTask](../enums/_task_.tasktypes.md#dynamictask)*

*Defined in [src/workflowDefinition.ts:110](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/workflowDefinition.ts#L110)*
