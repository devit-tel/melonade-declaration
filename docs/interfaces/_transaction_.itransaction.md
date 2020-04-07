[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["transaction"](../modules/_transaction_.md) › [ITransaction](_transaction_.itransaction.md)

# Interface: ITransaction

## Hierarchy

* **ITransaction**

## Index

### Properties

* [createTime](_transaction_.itransaction.md#createtime)
* [endTime](_transaction_.itransaction.md#endtime)
* [input](_transaction_.itransaction.md#input)
* [output](_transaction_.itransaction.md#output)
* [parent](_transaction_.itransaction.md#optional-parent)
* [status](_transaction_.itransaction.md#status)
* [tags](_transaction_.itransaction.md#optional-tags)
* [transactionId](_transaction_.itransaction.md#transactionid)
* [workflowDefinition](_transaction_.itransaction.md#workflowdefinition)

## Properties

###  createTime

• **createTime**: *number*

*Defined in [src/transaction.ts:10](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/transaction.ts#L10)*

___

###  endTime

• **endTime**: *number*

*Defined in [src/transaction.ts:11](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/transaction.ts#L11)*

___

###  input

• **input**: *any*

*Defined in [src/transaction.ts:8](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/transaction.ts#L8)*

___

###  output

• **output**: *any*

*Defined in [src/transaction.ts:9](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/transaction.ts#L9)*

___

### `Optional` parent

• **parent**? : *object*

*Defined in [src/transaction.ts:14](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/transaction.ts#L14)*

#### Type declaration:

* **taskId**: *string*

* **taskType**: *[Task](../enums/_task_.tasktypes.md#task) | [Compensate](../enums/_task_.tasktypes.md#compensate)*

* **transactionId**: *string*

___

###  status

• **status**: *[TransactionStates](../enums/_state_.transactionstates.md)*

*Defined in [src/transaction.ts:7](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/transaction.ts#L7)*

___

### `Optional` tags

• **tags**? : *string[]*

*Defined in [src/transaction.ts:13](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/transaction.ts#L13)*

___

###  transactionId

• **transactionId**: *string*

*Defined in [src/transaction.ts:6](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/transaction.ts#L6)*

___

###  workflowDefinition

• **workflowDefinition**: *[IWorkflowDefinition](_workflowdefinition_.iworkflowdefinition.md)*

*Defined in [src/transaction.ts:12](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/transaction.ts#L12)*
