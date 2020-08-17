[@melonade/melonade-declaration - v0.8.0](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [ITaskTask](_workflowdefinition_.itasktask.md)

# Interface: ITaskTask

## Hierarchy

* [IBaseTask](_workflowdefinition_.ibasetask.md)

  ↳ **ITaskTask**

## Index

### Properties

* [ackTimeout](_workflowdefinition_.itasktask.md#optional-acktimeout)
* [inputParameters](_workflowdefinition_.itasktask.md#inputparameters)
* [name](_workflowdefinition_.itasktask.md#name)
* [retry](_workflowdefinition_.itasktask.md#optional-retry)
* [taskReferenceName](_workflowdefinition_.itasktask.md#taskreferencename)
* [timeout](_workflowdefinition_.itasktask.md#optional-timeout)
* [type](_workflowdefinition_.itasktask.md#type)

## Properties

### `Optional` ackTimeout

• **ackTimeout**? : *number | string*

*Defined in [src/workflowDefinition.ts:45](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/workflowDefinition.ts#L45)*

The given time that task can ack before it timeout in miliseconds (0 is no timeout)

___

###  inputParameters

• **inputParameters**: *any*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[inputParameters](_workflowdefinition_.ibasetask.md#inputparameters)*

*Defined in [src/workflowDefinition.ts:27](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/workflowDefinition.ts#L27)*

The input to be mapping to workflow's data

**`tjs-type`** object

___

###  name

• **name**: *string*

*Defined in [src/workflowDefinition.ts:39](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/workflowDefinition.ts#L39)*

The task's name

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

### `Optional` retry

• **retry**? : *object*

*Defined in [src/workflowDefinition.ts:55](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/workflowDefinition.ts#L55)*

Retry object

#### Type declaration:

* **delay**? : *number | string*

* **limit**? : *number | string*

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

### `Optional` timeout

• **timeout**? : *number | string*

*Defined in [src/workflowDefinition.ts:50](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/workflowDefinition.ts#L50)*

The given time that task can finish before it timeout in miliseconds (0 is no timeout)

___

###  type

• **type**: *[Task](../enums/_task_.tasktypes.md#task)*

*Defined in [src/workflowDefinition.ts:40](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/workflowDefinition.ts#L40)*
