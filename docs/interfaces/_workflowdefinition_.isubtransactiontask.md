[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [ISubTransactionTask](_workflowdefinition_.isubtransactiontask.md)

# Interface: ISubTransactionTask

## Hierarchy

* [IBaseTask](_workflowdefinition_.ibasetask.md)

  ↳ **ISubTransactionTask**

## Index

### Properties

* [inputParameters](_workflowdefinition_.isubtransactiontask.md#inputparameters)
* [taskReferenceName](_workflowdefinition_.isubtransactiontask.md#taskreferencename)
* [type](_workflowdefinition_.isubtransactiontask.md#type)

## Properties

###  inputParameters

• **inputParameters**: *object*

*Overrides [IBaseTask](_workflowdefinition_.ibasetask.md).[inputParameters](_workflowdefinition_.ibasetask.md#inputparameters)*

*Defined in [src/workflowDefinition.ts:133](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/workflowDefinition.ts#L133)*

#### Type declaration:

* **input**: *any*

* **workflowName**: *string*

* **workflowRev**: *string*

___

###  taskReferenceName

• **taskReferenceName**: *string*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[taskReferenceName](_workflowdefinition_.ibasetask.md#taskreferencename)*

*Defined in [src/workflowDefinition.ts:21](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/workflowDefinition.ts#L21)*

The referance name using in workflow

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

###  type

• **type**: *[SubTransaction](../enums/_task_.tasktypes.md#subtransaction)*

*Defined in [src/workflowDefinition.ts:132](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/workflowDefinition.ts#L132)*
