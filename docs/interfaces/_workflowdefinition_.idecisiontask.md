[@melonade/melonade-declaration - v0.8.0](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [IDecisionTask](_workflowdefinition_.idecisiontask.md)

# Interface: IDecisionTask

## Hierarchy

* [IBaseTask](_workflowdefinition_.ibasetask.md)

  ↳ **IDecisionTask**

## Index

### Properties

* [decisions](_workflowdefinition_.idecisiontask.md#decisions)
* [defaultDecision](_workflowdefinition_.idecisiontask.md#defaultdecision)
* [inputParameters](_workflowdefinition_.idecisiontask.md#inputparameters)
* [taskReferenceName](_workflowdefinition_.idecisiontask.md#taskreferencename)
* [type](_workflowdefinition_.idecisiontask.md#type)

## Properties

###  decisions

• **decisions**: *object*

*Defined in [src/workflowDefinition.ts:118](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L118)*

#### Type declaration:

* \[ **decision**: *string*\]: [Tasks](../modules/_workflowdefinition_.md#tasks)

___

###  defaultDecision

• **defaultDecision**: *[Tasks](../modules/_workflowdefinition_.md#tasks)*

*Defined in [src/workflowDefinition.ts:121](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L121)*

___

###  inputParameters

• **inputParameters**: *object*

*Overrides [IBaseTask](_workflowdefinition_.ibasetask.md).[inputParameters](_workflowdefinition_.ibasetask.md#inputparameters)*

*Defined in [src/workflowDefinition.ts:122](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L122)*

#### Type declaration:

* **case**? : *string*

___

###  taskReferenceName

• **taskReferenceName**: *string*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[taskReferenceName](_workflowdefinition_.ibasetask.md#taskreferencename)*

*Defined in [src/workflowDefinition.ts:21](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L21)*

The referance name using in workflow

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

###  type

• **type**: *[Decision](../enums/_task_.tasktypes.md#decision)*

*Defined in [src/workflowDefinition.ts:117](https://github.com/devit-tel/melonade-declaration/blob/eb487fd/src/workflowDefinition.ts#L117)*
