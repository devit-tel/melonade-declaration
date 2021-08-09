[@melonade/melonade-declaration - v0.8.0](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [ISubTransactionTask](_workflowdefinition_.isubtransactiontask.md)

# Interface: ISubTransactionTask

## Hierarchy

* [IBaseTask](_workflowdefinition_.ibasetask.md)

  ↳ **ISubTransactionTask**

## Index

### Properties

* [inputParameters](_workflowdefinition_.isubtransactiontask.md#inputparameters)
* [retry](_workflowdefinition_.isubtransactiontask.md#optional-retry)
* [taskReferenceName](_workflowdefinition_.isubtransactiontask.md#taskreferencename)
* [type](_workflowdefinition_.isubtransactiontask.md#type)

## Properties

###  inputParameters

• **inputParameters**: *object*

*Overrides [IBaseTask](_workflowdefinition_.ibasetask.md).[inputParameters](_workflowdefinition_.ibasetask.md#inputparameters)*

*Defined in [src/workflowDefinition.ts:138](https://github.com/devit-tel/melonade-declaration/blob/f3ec67f/src/workflowDefinition.ts#L138)*

#### Type declaration:

* **input**? : *any*

* **workflowName**: *string*

* **workflowRev**: *string*

___

### `Optional` retry

• **retry**? : *object*

*Defined in [src/workflowDefinition.ts:147](https://github.com/devit-tel/melonade-declaration/blob/f3ec67f/src/workflowDefinition.ts#L147)*

Retry object

#### Type declaration:

* **delay**? : *number | string*

* **limit**? : *number | string*

___

###  taskReferenceName

• **taskReferenceName**: *string*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[taskReferenceName](_workflowdefinition_.ibasetask.md#taskreferencename)*

*Defined in [src/workflowDefinition.ts:21](https://github.com/devit-tel/melonade-declaration/blob/f3ec67f/src/workflowDefinition.ts#L21)*

The referance name using in workflow

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

###  type

• **type**: *[SubTransaction](../enums/_task_.tasktypes.md#subtransaction)*

*Defined in [src/workflowDefinition.ts:137](https://github.com/devit-tel/melonade-declaration/blob/f3ec67f/src/workflowDefinition.ts#L137)*
