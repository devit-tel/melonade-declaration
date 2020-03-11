[@melonade/melonade-declaration](../README.md) › [Globals](../globals.md) › ["workflowDefinition"](../modules/_workflowdefinition_.md) › [ICompensateTask](_workflowdefinition_.icompensatetask.md)

# Interface: ICompensateTask

## Hierarchy

* [IBaseTask](_workflowdefinition_.ibasetask.md)

  ↳ **ICompensateTask**

## Index

### Properties

* [inputParameters](_workflowdefinition_.icompensatetask.md#inputparameters)
* [name](_workflowdefinition_.icompensatetask.md#name)
* [taskReferenceName](_workflowdefinition_.icompensatetask.md#taskreferencename)
* [type](_workflowdefinition_.icompensatetask.md#type)

## Properties

###  inputParameters

• **inputParameters**: *object*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[inputParameters](_workflowdefinition_.ibasetask.md#inputparameters)*

*Defined in [src/workflowDefinition.ts:27](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L27)*

The input to be mapping to workflow's data

**`tjs-type`** object

#### Type declaration:

* \[ **key**: *string*\]: string | number | object

___

###  name

• **name**: *string*

*Defined in [src/workflowDefinition.ts:96](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L96)*

The task's name

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

###  taskReferenceName

• **taskReferenceName**: *string*

*Inherited from [IBaseTask](_workflowdefinition_.ibasetask.md).[taskReferenceName](_workflowdefinition_.ibasetask.md#taskreferencename)*

*Defined in [src/workflowDefinition.ts:21](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L21)*

The referance name using in workflow

**`minlength`** 1

**`maxlength`** 64

**`pattern`** ^[a-zA-Z0-9-_]+$

**`tjs-type`** string

___

###  type

• **type**: *[Compensate](../enums/_task_.tasktypes.md#compensate)*

*Defined in [src/workflowDefinition.ts:97](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/workflowDefinition.ts#L97)*
