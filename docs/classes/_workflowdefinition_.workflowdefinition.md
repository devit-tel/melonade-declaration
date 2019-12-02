[@melonade/melonade-declaration](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [WorkflowDefinition](_workflowdefinition_.workflowdefinition.md)

# Class: WorkflowDefinition

## Hierarchy

* **WorkflowDefinition**

## Implements

* [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md)

## Index

### Constructors

* [constructor](_workflowdefinition_.workflowdefinition.md#constructor)

### Properties

* [description](_workflowdefinition_.workflowdefinition.md#description)
* [failureStrategy](_workflowdefinition_.workflowdefinition.md#failurestrategy)
* [name](_workflowdefinition_.workflowdefinition.md#name)
* [outputParameters](_workflowdefinition_.workflowdefinition.md#outputparameters)
* [recoveryWorkflow](_workflowdefinition_.workflowdefinition.md#recoveryworkflow)
* [retry](_workflowdefinition_.workflowdefinition.md#retry)
* [rev](_workflowdefinition_.workflowdefinition.md#rev)
* [tasks](_workflowdefinition_.workflowdefinition.md#tasks)

## Constructors

###  constructor

\+ **new WorkflowDefinition**(`workflowDefinition`: [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md)): *[WorkflowDefinition](_workflowdefinition_.workflowdefinition.md)*

*Defined in [src/workflowDefinition.ts:301](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L301)*

**Parameters:**

Name | Type |
------ | ------ |
`workflowDefinition` | [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md) |

**Returns:** *[WorkflowDefinition](_workflowdefinition_.workflowdefinition.md)*

## Properties

###  description

• **description**: *string*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[description](../interfaces/_workflowdefinition_.iworkflowdefinition.md#optional-description)*

*Defined in [src/workflowDefinition.ts:296](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L296)*

___

###  failureStrategy

• **failureStrategy**: *[WorkflowFailureStrategies](../enums/_state_.workflowfailurestrategies.md)*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[failureStrategy](../interfaces/_workflowdefinition_.iworkflowdefinition.md#optional-failurestrategy)*

*Defined in [src/workflowDefinition.ts:298](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L298)*

___

###  name

• **name**: *string*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[name](../interfaces/_workflowdefinition_.iworkflowdefinition.md#name)*

*Defined in [src/workflowDefinition.ts:294](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L294)*

___

###  outputParameters

• **outputParameters**: *object*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[outputParameters](../interfaces/_workflowdefinition_.iworkflowdefinition.md#optional-outputparameters)*

*Defined in [src/workflowDefinition.ts:301](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L301)*

#### Type declaration:

* \[ **key**: *string*\]: string | any

___

###  recoveryWorkflow

• **recoveryWorkflow**: *[IWorkflowRef](../interfaces/_workflowdefinition_.iworkflowref.md)*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[recoveryWorkflow](../interfaces/_workflowdefinition_.iworkflowdefinition.md#optional-recoveryworkflow)*

*Defined in [src/workflowDefinition.ts:300](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L300)*

___

###  retry

• **retry**: *object*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[retry](../interfaces/_workflowdefinition_.iworkflowdefinition.md#optional-retry)*

*Defined in [src/workflowDefinition.ts:299](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L299)*

#### Type declaration:

* **limit**: *number*

___

###  rev

• **rev**: *string*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[rev](../interfaces/_workflowdefinition_.iworkflowdefinition.md#rev)*

*Defined in [src/workflowDefinition.ts:295](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L295)*

___

###  tasks

• **tasks**: *Array*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[tasks](../interfaces/_workflowdefinition_.iworkflowdefinition.md#tasks)*

*Defined in [src/workflowDefinition.ts:297](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L297)*
