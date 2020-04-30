[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [ITaskTask](_workflowdefinition_.itasktask.md)

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

• **ackTimeout**? : *number*

*Defined in [src/workflowDefinition.ts:47](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/workflowDefinition.ts#L47)*

The given time that task can ack before it timeout in miliseconds (0 is no timeout)

**`minimum`** 0

**`tjs-type`** integer

___

###  inputParameters

• **inputParameters**: *any*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[inputParameters](_workflowdefinition_.ibasetask.md#inputparameters)*

*Defined in [src/workflowDefinition.ts:27](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/workflowDefinition.ts#L27)*

The input to be mapping to workflow's data

**`tjs-type`** object

___

###  name

• **name**: *string*

*Defined in [src/workflowDefinition.ts:39](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/workflowDefinition.ts#L39)*

The task's name

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

### `Optional` retry

• **retry**? : *object*

*Defined in [src/workflowDefinition.ts:59](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/workflowDefinition.ts#L59)*

Retry object

#### Type declaration:

* **delay**? : *number*

* **limit**? : *number*

___

###  taskReferenceName

• **taskReferenceName**: *string*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[taskReferenceName](_workflowdefinition_.ibasetask.md#taskreferencename)*

*Defined in [src/workflowDefinition.ts:21](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/workflowDefinition.ts#L21)*

The referance name using in workflow

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

### `Optional` timeout

• **timeout**? : *number*

*Defined in [src/workflowDefinition.ts:54](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/workflowDefinition.ts#L54)*

The given time that task can finish before it timeout in miliseconds (0 is no timeout)

**`minimum`** 0

**`tjs-type`** integer

___

###  type

• **type**: *[Task](../enums/_task_.tasktypes.md#task)*

*Defined in [src/workflowDefinition.ts:40](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/workflowDefinition.ts#L40)*
