[@melonade/melonade-declaration](../README.md) › [Globals](../globals.md) › ["state"](_state_.md)

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

• **systemTaskPrevStateGetter**: *function* =  getPrevState(TaskNextStatesSystem)

*Defined in [src/state.ts:162](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L162)*

#### Type declaration:

▸ (...`args`: Cast‹G, Tuple›): *Return‹F›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Cast‹G, Tuple› |

___

### `Const` taskPrevStateGetter

• **taskPrevStateGetter**: *function* =  getPrevState(TaskNextStates)

*Defined in [src/state.ts:131](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L131)*

#### Type declaration:

▸ (...`args`: Cast‹G, Tuple›): *Return‹F›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Cast‹G, Tuple› |

___

### `Const` transactionPrevStateGetter

• **transactionPrevStateGetter**: *function* =  getPrevState(TransactionNextStates)

*Defined in [src/state.ts:36](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L36)*

#### Type declaration:

▸ (...`args`: Cast‹G, Tuple›): *Return‹F›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Cast‹G, Tuple› |

___

### `Const` workflowPrevStateGetter

• **workflowPrevStateGetter**: *function* =  getPrevState(WorkflowNextStates)

*Defined in [src/state.ts:98](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L98)*

#### Type declaration:

▸ (...`args`: Cast‹G, Tuple›): *Return‹F›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Cast‹G, Tuple› |

## Object literals

### `Const` SystemTaskPrevStates

### ▪ **SystemTaskPrevStates**: *object*

*Defined in [src/state.ts:164](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L164)*

###  __computed

• **__computed**: *string[]* =  systemTaskPrevStateGetter(TaskStates.AckTimeOut)

*Defined in [src/state.ts:165](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L165)*

*Defined in [src/state.ts:166](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L166)*

*Defined in [src/state.ts:167](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L167)*

*Defined in [src/state.ts:168](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L168)*

*Defined in [src/state.ts:169](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L169)*

*Defined in [src/state.ts:170](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L170)*

___

### `Const` TaskNextStates

### ▪ **TaskNextStates**: *object*

*Defined in [src/state.ts:118](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L118)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:119](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L119)*

*Defined in [src/state.ts:120](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L120)*

*Defined in [src/state.ts:125](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L125)*

*Defined in [src/state.ts:126](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L126)*

*Defined in [src/state.ts:127](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L127)*

*Defined in [src/state.ts:128](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L128)*

___

### `Const` TaskNextStatesSystem

### ▪ **TaskNextStatesSystem**: *object*

*Defined in [src/state.ts:142](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L142)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:143](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L143)*

*Defined in [src/state.ts:150](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L150)*

*Defined in [src/state.ts:156](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L156)*

*Defined in [src/state.ts:157](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L157)*

*Defined in [src/state.ts:158](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L158)*

*Defined in [src/state.ts:159](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L159)*

___

### `Const` TaskPrevStates

### ▪ **TaskPrevStates**: *object*

*Defined in [src/state.ts:133](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L133)*

###  __computed

• **__computed**: *string[]* =  taskPrevStateGetter(TaskStates.AckTimeOut)

*Defined in [src/state.ts:134](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L134)*

*Defined in [src/state.ts:135](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L135)*

*Defined in [src/state.ts:136](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L136)*

*Defined in [src/state.ts:137](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L137)*

*Defined in [src/state.ts:138](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L138)*

*Defined in [src/state.ts:139](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L139)*

___

### `Const` TransactionNextStates

### ▪ **TransactionNextStates**: *object*

*Defined in [src/state.ts:14](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L14)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:15](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L15)*

*Defined in [src/state.ts:16](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L16)*

*Defined in [src/state.ts:17](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L17)*

*Defined in [src/state.ts:25](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L25)*

*Defined in [src/state.ts:32](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L32)*

*Defined in [src/state.ts:33](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L33)*

___

### `Const` TransactionPrevStates

### ▪ **TransactionPrevStates**: *object*

*Defined in [src/state.ts:38](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L38)*

###  __computed

• **__computed**: *string[]* =  transactionPrevStateGetter(
    TransactionStates.Compensated,
  )

*Defined in [src/state.ts:39](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L39)*

*Defined in [src/state.ts:42](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L42)*

*Defined in [src/state.ts:45](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L45)*

*Defined in [src/state.ts:48](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L48)*

*Defined in [src/state.ts:51](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L51)*

*Defined in [src/state.ts:54](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L54)*

___

### `Const` WorkflowNextStates

### ▪ **WorkflowNextStates**: *object*

*Defined in [src/state.ts:76](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L76)*

###  __computed

• **__computed**: *undefined[]* =  []

*Defined in [src/state.ts:77](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L77)*

*Defined in [src/state.ts:78](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L78)*

*Defined in [src/state.ts:79](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L79)*

*Defined in [src/state.ts:80](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L80)*

*Defined in [src/state.ts:88](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L88)*

*Defined in [src/state.ts:95](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L95)*

___

### `Const` WorkflowPrevStates

### ▪ **WorkflowPrevStates**: *object*

*Defined in [src/state.ts:100](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L100)*

###  __computed

• **__computed**: *string[]* =  workflowPrevStateGetter(WorkflowStates.Cancelled)

*Defined in [src/state.ts:101](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L101)*

*Defined in [src/state.ts:102](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L102)*

*Defined in [src/state.ts:103](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L103)*

*Defined in [src/state.ts:104](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L104)*

*Defined in [src/state.ts:105](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L105)*

*Defined in [src/state.ts:106](https://github.com/devit-tel/melonade-declaration/blob/f57d96e/src/state.ts#L106)*
