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

*Defined in [src/workflowDefinition.ts:308](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L308)*

**Parameters:**

Name | Type |
------ | ------ |
`workflowDefinition` | [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md) |

**Returns:** *[WorkflowDefinition](_workflowdefinition_.workflowdefinition.md)*

## Properties

###  description

• **description**: *string*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[description](../interfaces/_workflowdefinition_.iworkflowdefinition.md#optional-description)*

*Defined in [src/workflowDefinition.ts:303](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L303)*

___

###  failureStrategy

• **failureStrategy**: *[WorkflowFailureStrategies](../enums/_state_.workflowfailurestrategies.md)*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[failureStrategy](../interfaces/_workflowdefinition_.iworkflowdefinition.md#optional-failurestrategy)*

*Defined in [src/workflowDefinition.ts:305](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L305)*

___

###  name

• **name**: *string*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[name](../interfaces/_workflowdefinition_.iworkflowdefinition.md#name)*

*Defined in [src/workflowDefinition.ts:301](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L301)*

___

###  outputParameters

• **outputParameters**: *object*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[outputParameters](../interfaces/_workflowdefinition_.iworkflowdefinition.md#optional-outputparameters)*

*Defined in [src/workflowDefinition.ts:308](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L308)*

#### Type declaration:

* \[ **key**: *string*\]: string | any

___

###  recoveryWorkflow

• **recoveryWorkflow**: *[IWorkflowRef](../interfaces/_workflowdefinition_.iworkflowref.md)*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[recoveryWorkflow](../interfaces/_workflowdefinition_.iworkflowdefinition.md#optional-recoveryworkflow)*

*Defined in [src/workflowDefinition.ts:307](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L307)*

___

###  retry

• **retry**: *object*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[retry](../interfaces/_workflowdefinition_.iworkflowdefinition.md#optional-retry)*

*Defined in [src/workflowDefinition.ts:306](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L306)*

#### Type declaration:

* **limit**: *number*

___

###  rev

• **rev**: *string*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[rev](../interfaces/_workflowdefinition_.iworkflowdefinition.md#rev)*

*Defined in [src/workflowDefinition.ts:302](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L302)*

___

###  tasks

• **tasks**: *Array*

*Implementation of [IWorkflowDefinition](../interfaces/_workflowdefinition_.iworkflowdefinition.md).[tasks](../interfaces/_workflowdefinition_.iworkflowdefinition.md#tasks)*

*Defined in [src/workflowDefinition.ts:304](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L304)*
