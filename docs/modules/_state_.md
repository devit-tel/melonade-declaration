[@melonade/melonade-declaration - v0.8.0](../README.md) › [Globals](../globals.md) › ["state"](_state_.md)

# External module: "state"

## Index

### Enumerations

* [TaskStates](../enums/_state_.taskstates.md)
* [TransactionStates](../enums/_state_.transactionstates.md)
* [WorkflowFailureStrategies](../enums/_state_.workflowfailurestrategies.md)
* [WorkflowStates](../enums/_state_.workflowstates.md)

### Variables

* [subTransactionPrevStateGetter](_state_.md#const-subtransactionprevstategetter)
* [systemTaskPrevStateGetter](_state_.md#const-systemtaskprevstategetter)
* [taskPrevStateGetter](_state_.md#const-taskprevstategetter)
* [transactionPrevStateGetter](_state_.md#const-transactionprevstategetter)
* [workflowPrevStateGetter](_state_.md#const-workflowprevstategetter)

### Object literals

* [SubTransactionNextStates](_state_.md#const-subtransactionnextstates)
* [SubTransactionPrevStates](_state_.md#const-subtransactionprevstates)
* [SystemTaskPrevStates](_state_.md#const-systemtaskprevstates)
* [TaskNextStates](_state_.md#const-tasknextstates)
* [TaskNextStatesSystem](_state_.md#const-tasknextstatessystem)
* [TaskPrevStates](_state_.md#const-taskprevstates)
* [TransactionNextStates](_state_.md#const-transactionnextstates)
* [TransactionPrevStates](_state_.md#const-transactionprevstates)
* [WorkflowNextStates](_state_.md#const-workflownextstates)
* [WorkflowPrevStates](_state_.md#const-workflowprevstates)

## Variables

### `Const` subTransactionPrevStateGetter

• **subTransactionPrevStateGetter**: *function & function* =  getPrevState(TransactionNextStates)

*Defined in [src/state.ts:84](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L84)*

___

### `Const` systemTaskPrevStateGetter

• **systemTaskPrevStateGetter**: *function & function* =  getPrevState(TaskNextStatesSystem)

*Defined in [src/state.ts:210](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L210)*

___

### `Const` taskPrevStateGetter

• **taskPrevStateGetter**: *function & function* =  getPrevState(TaskNextStates)

*Defined in [src/state.ts:179](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L179)*

___

### `Const` transactionPrevStateGetter

• **transactionPrevStateGetter**: *function & function* =  getPrevState(TransactionNextStates)

*Defined in [src/state.ts:61](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L61)*

___

### `Const` workflowPrevStateGetter

• **workflowPrevStateGetter**: *function & function* =  getPrevState(WorkflowNextStates)

*Defined in [src/state.ts:146](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L146)*

## Object literals

### `Const` SubTransactionNextStates

### ▪ **SubTransactionNextStates**: *object*

*Defined in [src/state.ts:36](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L36)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:37](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L37)*

*Defined in [src/state.ts:41](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L41)*

*Defined in [src/state.ts:42](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L42)*

*Defined in [src/state.ts:50](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L50)*

*Defined in [src/state.ts:57](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L57)*

*Defined in [src/state.ts:58](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L58)*

___

### `Const` SubTransactionPrevStates

### ▪ **SubTransactionPrevStates**: *object*

*Defined in [src/state.ts:86](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L86)*

###  __computed

• **__computed**: *string[]* =  subTransactionPrevStateGetter(
    TransactionStates.Compensated,
  )

*Defined in [src/state.ts:87](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L87)*

*Defined in [src/state.ts:90](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L90)*

*Defined in [src/state.ts:93](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L93)*

*Defined in [src/state.ts:96](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L96)*

*Defined in [src/state.ts:99](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L99)*

*Defined in [src/state.ts:102](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L102)*

___

### `Const` SystemTaskPrevStates

### ▪ **SystemTaskPrevStates**: *object*

*Defined in [src/state.ts:212](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L212)*

###  __computed

• **__computed**: *string[]* =  systemTaskPrevStateGetter(TaskStates.AckTimeOut)

*Defined in [src/state.ts:213](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L213)*

*Defined in [src/state.ts:214](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L214)*

*Defined in [src/state.ts:215](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L215)*

*Defined in [src/state.ts:216](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L216)*

*Defined in [src/state.ts:217](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L217)*

*Defined in [src/state.ts:218](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L218)*

___

### `Const` TaskNextStates

### ▪ **TaskNextStates**: *object*

*Defined in [src/state.ts:166](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L166)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:167](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L167)*

*Defined in [src/state.ts:168](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L168)*

*Defined in [src/state.ts:173](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L173)*

*Defined in [src/state.ts:174](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L174)*

*Defined in [src/state.ts:175](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L175)*

*Defined in [src/state.ts:176](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L176)*

___

### `Const` TaskNextStatesSystem

### ▪ **TaskNextStatesSystem**: *object*

*Defined in [src/state.ts:190](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L190)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:191](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L191)*

*Defined in [src/state.ts:198](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L198)*

*Defined in [src/state.ts:204](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L204)*

*Defined in [src/state.ts:205](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L205)*

*Defined in [src/state.ts:206](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L206)*

*Defined in [src/state.ts:207](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L207)*

___

### `Const` TaskPrevStates

### ▪ **TaskPrevStates**: *object*

*Defined in [src/state.ts:181](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L181)*

###  __computed

• **__computed**: *string[]* =  taskPrevStateGetter(TaskStates.AckTimeOut)

*Defined in [src/state.ts:182](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L182)*

*Defined in [src/state.ts:183](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L183)*

*Defined in [src/state.ts:184](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L184)*

*Defined in [src/state.ts:185](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L185)*

*Defined in [src/state.ts:186](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L186)*

*Defined in [src/state.ts:187](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L187)*

___

### `Const` TransactionNextStates

### ▪ **TransactionNextStates**: *object*

*Defined in [src/state.ts:14](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L14)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:15](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L15)*

*Defined in [src/state.ts:16](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L16)*

*Defined in [src/state.ts:17](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L17)*

*Defined in [src/state.ts:25](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L25)*

*Defined in [src/state.ts:32](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L32)*

*Defined in [src/state.ts:33](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L33)*

___

### `Const` TransactionPrevStates

### ▪ **TransactionPrevStates**: *object*

*Defined in [src/state.ts:63](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L63)*

###  __computed

• **__computed**: *string[]* =  transactionPrevStateGetter(
    TransactionStates.Compensated,
  )

*Defined in [src/state.ts:64](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L64)*

*Defined in [src/state.ts:67](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L67)*

*Defined in [src/state.ts:70](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L70)*

*Defined in [src/state.ts:73](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L73)*

*Defined in [src/state.ts:76](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L76)*

*Defined in [src/state.ts:79](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L79)*

___

### `Const` WorkflowNextStates

### ▪ **WorkflowNextStates**: *object*

*Defined in [src/state.ts:124](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L124)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:125](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L125)*

*Defined in [src/state.ts:126](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L126)*

*Defined in [src/state.ts:127](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L127)*

*Defined in [src/state.ts:128](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L128)*

*Defined in [src/state.ts:136](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L136)*

*Defined in [src/state.ts:143](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L143)*

___

### `Const` WorkflowPrevStates

### ▪ **WorkflowPrevStates**: *object*

*Defined in [src/state.ts:148](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L148)*

###  __computed

• **__computed**: *string[]* =  workflowPrevStateGetter(WorkflowStates.Cancelled)

*Defined in [src/state.ts:149](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L149)*

*Defined in [src/state.ts:150](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L150)*

*Defined in [src/state.ts:151](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L151)*

*Defined in [src/state.ts:152](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L152)*

*Defined in [src/state.ts:153](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L153)*

*Defined in [src/state.ts:154](https://github.com/devit-tel/melonade-declaration/blob/26b2f11/src/state.ts#L154)*
