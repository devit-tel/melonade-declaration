[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["state"](_state_.md)

# External module: "state"

## Index

### Enumerations

* [TaskStates](../enums/_state_.taskstates.md)
* [TransactionStates](../enums/_state_.transactionstates.md)
* [WorkflowFailureStrategies](../enums/_state_.workflowfailurestrategies.md)
* [WorkflowStates](../enums/_state_.workflowstates.md)

### Variables

* [systemTaskPrevStateGetter](_state_.md#const-systemtaskprevstategetter)
* [taskPrevStateGetter](_state_.md#const-taskprevstategetter)
* [transactionPrevStateGetter](_state_.md#const-transactionprevstategetter)
* [workflowPrevStateGetter](_state_.md#const-workflowprevstategetter)

### Object literals

* [SystemTaskPrevStates](_state_.md#const-systemtaskprevstates)
* [TaskNextStates](_state_.md#const-tasknextstates)
* [TaskNextStatesSystem](_state_.md#const-tasknextstatessystem)
* [TaskPrevStates](_state_.md#const-taskprevstates)
* [TransactionNextStates](_state_.md#const-transactionnextstates)
* [TransactionPrevStates](_state_.md#const-transactionprevstates)
* [WorkflowNextStates](_state_.md#const-workflownextstates)
* [WorkflowPrevStates](_state_.md#const-workflowprevstates)

## Variables

### `Const` systemTaskPrevStateGetter

• **systemTaskPrevStateGetter**: *function & function* =  getPrevState(TaskNextStatesSystem)

*Defined in [src/state.ts:164](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L164)*

___

### `Const` taskPrevStateGetter

• **taskPrevStateGetter**: *function & function* =  getPrevState(TaskNextStates)

*Defined in [src/state.ts:133](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L133)*

___

### `Const` transactionPrevStateGetter

• **transactionPrevStateGetter**: *function & function* =  getPrevState(TransactionNextStates)

*Defined in [src/state.ts:38](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L38)*

___

### `Const` workflowPrevStateGetter

• **workflowPrevStateGetter**: *function & function* =  getPrevState(WorkflowNextStates)

*Defined in [src/state.ts:100](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L100)*

## Object literals

### `Const` SystemTaskPrevStates

### ▪ **SystemTaskPrevStates**: *object*

*Defined in [src/state.ts:166](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L166)*

###  __computed

• **__computed**: *string[]* =  systemTaskPrevStateGetter(TaskStates.AckTimeOut)

*Defined in [src/state.ts:167](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L167)*

*Defined in [src/state.ts:168](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L168)*

*Defined in [src/state.ts:169](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L169)*

*Defined in [src/state.ts:170](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L170)*

*Defined in [src/state.ts:171](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L171)*

*Defined in [src/state.ts:172](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L172)*

___

### `Const` TaskNextStates

### ▪ **TaskNextStates**: *object*

*Defined in [src/state.ts:120](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L120)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:121](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L121)*

*Defined in [src/state.ts:122](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L122)*

*Defined in [src/state.ts:127](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L127)*

*Defined in [src/state.ts:128](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L128)*

*Defined in [src/state.ts:129](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L129)*

*Defined in [src/state.ts:130](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L130)*

___

### `Const` TaskNextStatesSystem

### ▪ **TaskNextStatesSystem**: *object*

*Defined in [src/state.ts:144](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L144)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:145](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L145)*

*Defined in [src/state.ts:152](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L152)*

*Defined in [src/state.ts:158](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L158)*

*Defined in [src/state.ts:159](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L159)*

*Defined in [src/state.ts:160](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L160)*

*Defined in [src/state.ts:161](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L161)*

___

### `Const` TaskPrevStates

### ▪ **TaskPrevStates**: *object*

*Defined in [src/state.ts:135](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L135)*

###  __computed

• **__computed**: *string[]* =  taskPrevStateGetter(TaskStates.AckTimeOut)

*Defined in [src/state.ts:136](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L136)*

*Defined in [src/state.ts:137](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L137)*

*Defined in [src/state.ts:138](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L138)*

*Defined in [src/state.ts:139](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L139)*

*Defined in [src/state.ts:140](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L140)*

*Defined in [src/state.ts:141](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L141)*

___

### `Const` TransactionNextStates

### ▪ **TransactionNextStates**: *object*

*Defined in [src/state.ts:14](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L14)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:15](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L15)*

*Defined in [src/state.ts:18](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L18)*

*Defined in [src/state.ts:19](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L19)*

*Defined in [src/state.ts:27](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L27)*

*Defined in [src/state.ts:34](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L34)*

*Defined in [src/state.ts:35](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L35)*

___

### `Const` TransactionPrevStates

### ▪ **TransactionPrevStates**: *object*

*Defined in [src/state.ts:40](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L40)*

###  __computed

• **__computed**: *string[]* =  transactionPrevStateGetter(
    TransactionStates.Compensated,
  )

*Defined in [src/state.ts:41](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L41)*

*Defined in [src/state.ts:44](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L44)*

*Defined in [src/state.ts:47](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L47)*

*Defined in [src/state.ts:50](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L50)*

*Defined in [src/state.ts:53](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L53)*

*Defined in [src/state.ts:56](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L56)*

___

### `Const` WorkflowNextStates

### ▪ **WorkflowNextStates**: *object*

*Defined in [src/state.ts:78](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L78)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:79](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L79)*

*Defined in [src/state.ts:80](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L80)*

*Defined in [src/state.ts:81](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L81)*

*Defined in [src/state.ts:82](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L82)*

*Defined in [src/state.ts:90](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L90)*

*Defined in [src/state.ts:97](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L97)*

___

### `Const` WorkflowPrevStates

### ▪ **WorkflowPrevStates**: *object*

*Defined in [src/state.ts:102](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L102)*

###  __computed

• **__computed**: *string[]* =  workflowPrevStateGetter(WorkflowStates.Cancelled)

*Defined in [src/state.ts:103](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L103)*

*Defined in [src/state.ts:104](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L104)*

*Defined in [src/state.ts:105](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L105)*

*Defined in [src/state.ts:106](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L106)*

*Defined in [src/state.ts:107](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L107)*

*Defined in [src/state.ts:108](https://github.com/devit-tel/melonade-declaration/blob/4a3ce57/src/state.ts#L108)*
