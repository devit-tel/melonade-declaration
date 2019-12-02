[@melonade/melonade-declaration](../README.md) › [Globals](../globals.md) › ["taskDefinition"](../modules/_taskdefinition_.md) › [TaskDefinition](_taskdefinition_.taskdefinition.md)

# Class: TaskDefinition

## Hierarchy

* **TaskDefinition**

## Implements

* [ITaskDefinition](../interfaces/_taskdefinition_.itaskdefinition.md)

## Index

### Constructors

* [constructor](_taskdefinition_.taskdefinition.md#constructor)

### Properties

* [ackTimeout](_taskdefinition_.taskdefinition.md#acktimeout)
* [description](_taskdefinition_.taskdefinition.md#description)
* [document](_taskdefinition_.taskdefinition.md#document)
* [name](_taskdefinition_.taskdefinition.md#name)
* [retry](_taskdefinition_.taskdefinition.md#retry)
* [timeout](_taskdefinition_.taskdefinition.md#timeout)

## Constructors

###  constructor

\+ **new TaskDefinition**(`taskDefinition`: [ITaskDefinition](../interfaces/_taskdefinition_.itaskdefinition.md)): *[TaskDefinition](_taskdefinition_.taskdefinition.md)*

*Defined in [src/taskDefinition.ts:81](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/taskDefinition.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`taskDefinition` | [ITaskDefinition](../interfaces/_taskdefinition_.itaskdefinition.md) |

**Returns:** *[TaskDefinition](_taskdefinition_.taskdefinition.md)*

## Properties

###  ackTimeout

• **ackTimeout**: *number*

*Implementation of [ITaskDefinition](../interfaces/_taskdefinition_.itaskdefinition.md).[ackTimeout](../interfaces/_taskdefinition_.itaskdefinition.md#optional-acktimeout)*

*Defined in [src/taskDefinition.ts:78](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/taskDefinition.ts#L78)*

___

###  description

• **description**: *string*

*Implementation of [ITaskDefinition](../interfaces/_taskdefinition_.itaskdefinition.md).[description](../interfaces/_taskdefinition_.itaskdefinition.md#optional-description)*

*Defined in [src/taskDefinition.ts:77](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/taskDefinition.ts#L77)*

___

###  document

• **document**: *object*

*Implementation of [ITaskDefinition](../interfaces/_taskdefinition_.itaskdefinition.md).[document](../interfaces/_taskdefinition_.itaskdefinition.md#optional-document)*

*Defined in [src/taskDefinition.ts:81](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/taskDefinition.ts#L81)*

#### Type declaration:

* **inputs**? : *object*

* **output**? : *object*

___

###  name

• **name**: *string*

*Implementation of [ITaskDefinition](../interfaces/_taskdefinition_.itaskdefinition.md).[name](../interfaces/_taskdefinition_.itaskdefinition.md#name)*

*Defined in [src/taskDefinition.ts:76](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/taskDefinition.ts#L76)*

___

###  retry

• **retry**: *object*

*Implementation of [ITaskDefinition](../interfaces/_taskdefinition_.itaskdefinition.md).[retry](../interfaces/_taskdefinition_.itaskdefinition.md#optional-retry)*

*Defined in [src/taskDefinition.ts:80](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/taskDefinition.ts#L80)*

#### Type declaration:

* **delay**: *number*

* **limit**: *number*

___

###  timeout

• **timeout**: *number*

*Implementation of [ITaskDefinition](../interfaces/_taskdefinition_.itaskdefinition.md).[timeout](../interfaces/_taskdefinition_.itaskdefinition.md#optional-timeout)*

*Defined in [src/taskDefinition.ts:79](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/taskDefinition.ts#L79)*
