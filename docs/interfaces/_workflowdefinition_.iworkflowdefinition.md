[@melonade/melonade-declaration - v0.8.0](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [IWorkflowDefinition](_workflowdefinition_.iworkflowdefinition.md)

# Interface: IWorkflowDefinition

## Hierarchy

* **IWorkflowDefinition**

## Implemented by

* [WorkflowDefinition](../classes/_workflowdefinition_.workflowdefinition.md)

## Index

### Properties

* [description](_workflowdefinition_.iworkflowdefinition.md#optional-description)
* [failureStrategy](_workflowdefinition_.iworkflowdefinition.md#optional-failurestrategy)
* [name](_workflowdefinition_.iworkflowdefinition.md#name)
* [outputParameters](_workflowdefinition_.iworkflowdefinition.md#optional-outputparameters)
* [recoveryWorkflow](_workflowdefinition_.iworkflowdefinition.md#optional-recoveryworkflow)
* [retry](_workflowdefinition_.iworkflowdefinition.md#optional-retry)
* [rev](_workflowdefinition_.iworkflowdefinition.md#rev)
* [tasks](_workflowdefinition_.iworkflowdefinition.md#tasks)

## Properties

### `Optional` description

• **description**? : *string*

*Defined in [src/workflowDefinition.ts:179](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L179)*

The workflow's description

**`default`** "-"

**`tjs-type`** string

___

### `Optional` failureStrategy

• **failureStrategy**? : *[WorkflowFailureStrategies](../enums/_state_.workflowfailurestrategies.md)*

*Defined in [src/workflowDefinition.ts:187](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L187)*

The workflow's failure strategies

**`default`** "FAILED"

**`tjs-type`** string

___

###  name

• **name**: *string*

*Defined in [src/workflowDefinition.ts:163](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L163)*

The workflow's name

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

### `Optional` outputParameters

• **outputParameters**? : *object*

*Defined in [src/workflowDefinition.ts:210](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L210)*

The workflow's output mapping

**`default`** {}

**`tjs-type`** object

#### Type declaration:

* \[ **key**: *string*\]: string | any

___

### `Optional` recoveryWorkflow

• **recoveryWorkflow**? : *[IWorkflowRef](_workflowdefinition_.iworkflowref.md)*

*Defined in [src/workflowDefinition.ts:203](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L203)*

___

### `Optional` retry

• **retry**? : *object*

*Defined in [src/workflowDefinition.ts:193](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L193)*

Retry object

**`default`** {"limit":0}

#### Type declaration:

* **limit**: *number*

___

###  rev

• **rev**: *string*

*Defined in [src/workflowDefinition.ts:172](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L172)*

The workflow's revision

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

###  tasks

• **tasks**: *[Tasks](../modules/_workflowdefinition_.md#tasks)*

*Defined in [src/workflowDefinition.ts:180](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L180)*
