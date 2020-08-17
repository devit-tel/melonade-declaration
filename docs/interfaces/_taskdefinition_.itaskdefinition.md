[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["taskDefinition"](../modules/_taskdefinition_.md) › [ITaskDefinition](_taskdefinition_.itaskdefinition.md)

# Interface: ITaskDefinition

## Hierarchy

* **ITaskDefinition**

## Implemented by

* [TaskDefinition](../classes/_taskdefinition_.taskdefinition.md)

## Index

### Properties

* [ackTimeout](_taskdefinition_.itaskdefinition.md#optional-acktimeout)
* [description](_taskdefinition_.itaskdefinition.md#optional-description)
* [document](_taskdefinition_.itaskdefinition.md#optional-document)
* [name](_taskdefinition_.itaskdefinition.md#name)
* [retry](_taskdefinition_.itaskdefinition.md#optional-retry)
* [timeout](_taskdefinition_.itaskdefinition.md#optional-timeout)

## Properties

### `Optional` ackTimeout

• **ackTimeout**? : *number*

*Defined in [src/taskDefinition.ts:27](https://github.com/devit-tel/melonade-declaration/blob/43597e6/src/taskDefinition.ts#L27)*

The given time that task can ack before it timeout in miliseconds (0 is no timeout)

**`minimum`** 0

**`default`** 0

**`tjs-type`** integer

___

### `Optional` description

• **description**? : *string*

*Defined in [src/taskDefinition.ts:19](https://github.com/devit-tel/melonade-declaration/blob/43597e6/src/taskDefinition.ts#L19)*

The task's description

**`default`** "-"

**`tjs-type`** string

___

### `Optional` document

• **document**? : *object*

*Defined in [src/taskDefinition.ts:59](https://github.com/devit-tel/melonade-declaration/blob/43597e6/src/taskDefinition.ts#L59)*

#### Type declaration:

* **inputs**? : *object*

* **output**? : *object*

___

###  name

• **name**: *string*

*Defined in [src/taskDefinition.ts:12](https://github.com/devit-tel/melonade-declaration/blob/43597e6/src/taskDefinition.ts#L12)*

The task's name

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

### `Optional` retry

• **retry**? : *object*

*Defined in [src/taskDefinition.ts:41](https://github.com/devit-tel/melonade-declaration/blob/43597e6/src/taskDefinition.ts#L41)*

Retry object

**`default`** {"limit":0,"delay":0}

#### Type declaration:

* **delay**: *number*

* **limit**: *number*

___

### `Optional` timeout

• **timeout**? : *number*

*Defined in [src/taskDefinition.ts:35](https://github.com/devit-tel/melonade-declaration/blob/43597e6/src/taskDefinition.ts#L35)*

The given time that task can finish before it timeout in miliseconds (0 is no timeout)

**`minimum`** 0

**`default`** 0

**`tjs-type`** integer
