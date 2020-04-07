[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["task"](_task_.md)

# External module: "task"

## Index

### Enumerations

* [TaskTypes](../enums/_task_.tasktypes.md)

### Interfaces

* [ITask](../interfaces/_task_.itask.md)

### Variables

* [SYSTEM_TASKS](_task_.md#const-system_tasks)
* [TaskTypesList](_task_.md#const-tasktypeslist)
* [WORKER_TASKS](_task_.md#const-worker_tasks)

## Variables

### `Const` SYSTEM_TASKS

• **SYSTEM_TASKS**: *[TaskTypes](../enums/_task_.tasktypes.md)[]* =  [
  TaskTypes.Parallel,
  TaskTypes.Decision,
  TaskTypes.Schedule,
  TaskTypes.SubTransaction,
]

*Defined in [src/task.ts:14](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/task.ts#L14)*

___

### `Const` TaskTypesList

• **TaskTypesList**: *unknown[]* =  enumToList(TaskTypes)

*Defined in [src/task.ts:22](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/task.ts#L22)*

___

### `Const` WORKER_TASKS

• **WORKER_TASKS**: *[TaskTypes](../enums/_task_.tasktypes.md)[]* =  [TaskTypes.Task, TaskTypes.Compensate]

*Defined in [src/task.ts:20](https://github.com/devit-tel/melonade-declaration/blob/3e3ea40/src/task.ts#L20)*
