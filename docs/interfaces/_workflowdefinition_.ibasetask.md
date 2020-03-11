[@melonade/melonade-declaration](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [IBaseTask](_workflowdefinition_.ibasetask.md)

# Interface: IBaseTask

## Hierarchy

* **IBaseTask**

  ↳ [ITaskTask](_workflowdefinition_.itasktask.md)

  ↳ [ICompensateTask](_workflowdefinition_.icompensatetask.md)

  ↳ [IParallelTask](_workflowdefinition_.iparalleltask.md)

  ↳ [IDecisionTask](_workflowdefinition_.idecisiontask.md)

  ↳ [IScheduleTask](_workflowdefinition_.ischeduletask.md)

## Index

### Properties

* [inputParameters](_workflowdefinition_.ibasetask.md#inputparameters)
* [taskReferenceName](_workflowdefinition_.ibasetask.md#taskreferencename)

## Properties

###  inputParameters

• **inputParameters**: *object*

*Defined in [src/workflowDefinition.ts:27](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L27)*

The input to be mapping to workflow's data

**`tjs-type`** object

#### Type declaration:

* \[ **key**: *string*\]: string | number | object

___

###  taskReferenceName

• **taskReferenceName**: *string*

*Defined in [src/workflowDefinition.ts:21](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L21)*

The referance name using in workflow

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string
