[@melonade/melonade-declaration](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [IDecisionTask](_workflowdefinition_.idecisiontask.md)

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

*Defined in [src/workflowDefinition.ts:113](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L113)*

#### Type declaration:

* \[ **decision**: *string*\]: [Tasks](../modules/_workflowdefinition_.md#tasks)

___

###  defaultDecision

• **defaultDecision**: *[Tasks](../modules/_workflowdefinition_.md#tasks)*

*Defined in [src/workflowDefinition.ts:116](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L116)*

___

###  inputParameters

• **inputParameters**: *object*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[inputParameters](_workflowdefinition_.ibasetask.md#inputparameters)*

*Defined in [src/workflowDefinition.ts:27](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L27)*

The input to be mapping to workflow's data

**`tjs-type`** object

#### Type declaration:

* \[ **key**: *string*\]: string | number | object

___

###  taskReferenceName

• **taskReferenceName**: *string*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[taskReferenceName](_workflowdefinition_.ibasetask.md#taskreferencename)*

*Defined in [src/workflowDefinition.ts:21](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L21)*

The referance name using in workflow

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

###  type

• **type**: *[Decision](../enums/_task_.tasktypes.md#decision)*

*Defined in [src/workflowDefinition.ts:112](https://github.com/devit-tel/melonade-declaration/blob/2273da1/src/workflowDefinition.ts#L112)*
