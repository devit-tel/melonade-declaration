# Schema

```

```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------- |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             |            |

# Definitions

| Property                                                                         | Type      | Group                                     |
| -------------------------------------------------------------------------------- | --------- | ----------------------------------------- |
| [ackTimeout](#acktimeout)                                                        | `number`  | `#/definitions/TaskDefinition`            |
| [cleanup.policy](#cleanuppolicy)                                                 | `enum`    | `#/definitions/TopicConfigurations`       |
| [compression.type](#compressiontype)                                             | `enum`    | `#/definitions/TopicConfigurations`       |
| [createTime](#createtime)                                                        | `number`  | `#/definitions/IWorkflow`                 |
| [cron](#cron)                                                                    | `string`  | `#/definitions/ICronWorkflowTimer`        |
| [decisions](#decisions)                                                          | `object`  | `#/definitions/ITask`                     |
| [defaultDecision](#defaultdecision)                                              | `array`   | `#/definitions/ITask`                     |
| [delay](#delay)                                                                  | `number`  | `#/definitions/ITimerData`                |
| [delete.retention.ms](#deleteretentionms)                                        | `string`  | `#/definitions/TopicConfigurations`       |
| [description](#description)                                                      | `string`  | `#/definitions/WorkflowDefinition`        |
| [details](#details)                                                              | reference | `#/definitions/IWorkflowEvent`            |
| [document](#document)                                                            | `object`  | `#/definitions/TaskDefinition`            |
| [endTime](#endtime)                                                              | `number`  | `#/definitions/IWorkflow`                 |
| [error](#error)                                                                  | `string`  | `#/definitions/IWorkflowErrorEvent`       |
| [failureStrategy](#failurestrategy)                                              | `enum`    | `#/definitions/WorkflowDefinition`        |
| [file.delete.delay.ms](#filedeletedelayms)                                       | `string`  | `#/definitions/TopicConfigurations`       |
| [flush.messages](#flushmessages)                                                 | `string`  | `#/definitions/TopicConfigurations`       |
| [flush.ms](#flushms)                                                             | `string`  | `#/definitions/TopicConfigurations`       |
| [follower.replication.throttled.replicas](#followerreplicationthrottledreplicas) | `string`  | `#/definitions/TopicConfigurations`       |
| [index.interval.bytes](#indexintervalbytes)                                      | `string`  | `#/definitions/TopicConfigurations`       |
| [input](#input)                                                                  | `object`  | `#/definitions/IWorkflow`                 |
| [inputParameters](#inputparameters)                                              | `object`  | `#/definitions/ITaskTask`                 |
| [isError](#iserror)                                                              | `enum`    | `#/definitions/IWorkflowEvent`            |
| [isRetried](#isretried)                                                          | `boolean` | `#/definitions/ITask`                     |
| [isSystem](#issystem)                                                            | `boolean` | `#/definitions/ITaskUpdate`               |
| [key](#key)                                                                      | `string`  | `#/definitions/kafkaConsumerMessage`      |
| [leader.replication.throttled.replicas](#leaderreplicationthrottledreplicas)     | `string`  | `#/definitions/TopicConfigurations`       |
| [logs](#logs)                                                                    | complex   | `#/definitions/ITaskUpdate`               |
| [max.message.bytes](#maxmessagebytes)                                            | `string`  | `#/definitions/TopicConfigurations`       |
| [message.downconversion.enable](#messagedownconversionenable)                    | `boolean` | `#/definitions/TopicConfigurations`       |
| [message.format.version](#messageformatversion)                                  | `string`  | `#/definitions/TopicConfigurations`       |
| [message.timestamp.difference.max.ms](#messagetimestampdifferencemaxms)          | `string`  | `#/definitions/TopicConfigurations`       |
| [message.timestamp.type](#messagetimestamptype)                                  | `string`  | `#/definitions/TopicConfigurations`       |
| [min.cleanable.dirty.ratio](#mincleanabledirtyratio)                             | `string`  | `#/definitions/TopicConfigurations`       |
| [min.compaction.lag.ms](#mincompactionlagms)                                     | `string`  | `#/definitions/TopicConfigurations`       |
| [min.insync.replicas](#mininsyncreplicas)                                        | `string`  | `#/definitions/TopicConfigurations`       |
| [name](#name)                                                                    | `string`  | `#/definitions/WorkflowDefinition`        |
| [offset](#offset)                                                                | `number`  | `#/definitions/kafkaConsumerMessage`      |
| [output](#output)                                                                | complex   | `#/definitions/IWorkflowUpdate`           |
| [outputParameters](#outputparameters)                                            | `object`  | `#/definitions/WorkflowDefinition`        |
| [parallelTasks](#paralleltasks)                                                  | `array[]` | `#/definitions/ITask`                     |
| [partition](#partition)                                                          | `number`  | `#/definitions/kafkaConsumerMessage`      |
| [preallocate](#preallocate)                                                      | `string`  | `#/definitions/TopicConfigurations`       |
| [reason](#reason)                                                                | `string`  | `#/definitions/ICancelTransactionCommand` |
| [recoveryWorkflow](#recoveryworkflow)                                            | reference | `#/definitions/WorkflowDefinition`        |
| [retention.bytes](#retentionbytes)                                               | `string`  | `#/definitions/TopicConfigurations`       |
| [retention.ms](#retentionms)                                                     | `string`  | `#/definitions/TopicConfigurations`       |
| [retries](#retries)                                                              | `number`  | `#/definitions/IWorkflow`                 |
| [retry](#retry)                                                                  | `object`  | `#/definitions/WorkflowDefinition`        |
| [retryDelay](#retrydelay)                                                        | `number`  | `#/definitions/ITask`                     |
| [rev](#rev)                                                                      | `string`  | `#/definitions/WorkflowDefinition`        |
| [segment.bytes](#segmentbytes)                                                   | `string`  | `#/definitions/TopicConfigurations`       |
| [segment.index.bytes](#segmentindexbytes)                                        | `string`  | `#/definitions/TopicConfigurations`       |
| [segment.jitter.ms](#segmentjitterms)                                            | `string`  | `#/definitions/TopicConfigurations`       |
| [segment.ms](#segmentms)                                                         | `string`  | `#/definitions/TopicConfigurations`       |
| [size](#size)                                                                    | `number`  | `#/definitions/kafkaConsumerMessage`      |
| [startTime](#starttime)                                                          | `number`  | `#/definitions/IWorkflow`                 |
| [status](#status)                                                                | reference | `#/definitions/IWorkflowUpdate`           |
| [task](#task)                                                                    | reference | `#/definitions/ITimerData`                |
| [taskId](#taskid)                                                                | `string`  | `#/definitions/ITaskUpdate`               |
| [taskName](#taskname)                                                            | `string`  | `#/definitions/ITask`                     |
| [taskReferenceName](#taskreferencename)                                          | `string`  | `#/definitions/ITaskTask`                 |
| [tasks](#tasks)                                                                  | `array`   | `#/definitions/WorkflowDefinition`        |
| [timeout](#timeout)                                                              | `number`  | `#/definitions/TaskDefinition`            |
| [timestamp](#timestamp)                                                          | `number`  | `#/definitions/IWorkflowEvent`            |
| [topic](#topic)                                                                  | `string`  | `#/definitions/kafkaConsumerMessage`      |
| [transactionId](#transactionid)                                                  | `string`  | `#/definitions/IWorkflowUpdate`           |
| [type](#type)                                                                    | `enum`    | `#/definitions/IWorkflowEvent`            |
| [unclean.leader.election.enable](#uncleanleaderelectionenable)                   | `boolean` | `#/definitions/TopicConfigurations`       |
| [value](#value)                                                                  | `object`  | `#/definitions/kafkaConsumerMessage`      |
| [workflow](#workflow)                                                            | reference | `#/definitions/IStartTransactionCommand`  |
| [workflowDefinition](#workflowdefinition)                                        | reference | `#/definitions/IWorkflow`                 |
| [workflowId](#workflowid)                                                        | `string`  | `#/definitions/IWorkflowUpdate`           |

## ackTimeout

The given time that task can ack before it timeout in miliseconds (0 is no timeout)

`ackTimeout`

- is **required**
- type: `number`
- defined in this schema

### ackTimeout Type

`number`

## cleanup.policy

`cleanup.policy`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#cleanuppolicy-known-values).

### cleanup.policy Known Values

| Value     | Description |
| --------- | ----------- |
| `compact` |             |
| `delete`  |             |

## compression.type

`compression.type`

- is optional
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#compressiontype-known-values).

### compression.type Known Values

| Value          | Description |
| -------------- | ----------- |
| `gzip`         |             |
| `lz4`          |             |
| `producer`     |             |
| `snappy`       |             |
| `uncompressed` |             |
| `zstd`         |             |

## createTime

`createTime`

- is **required**
- type: `number`
- defined in this schema

### createTime Type

`number`

## cron

`cron`

- is **required**
- type: `string`
- defined in this schema

### cron Type

`string`

## decisions

`decisions`

- is **required**
- type: `object`
- defined in this schema

### decisions Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## defaultDecision

`defaultDecision`

- is **required**
- type: `array`
- defined in this schema

### defaultDecision Type

Array type: `array`

All items must be of the type:

**Any** following _options_ needs to be fulfilled.

#### Option 1

- []() – `#/definitions/ITaskTask`

#### Option 2

- []() – `#/definitions/ICompensateTask`

#### Option 3

- []() – `#/definitions/IParallelTask`

#### Option 4

- []() – `#/definitions/IDecisionTask`

## delay

`delay`

- is **required**
- type: `number`
- defined in this schema

### delay Type

`number`

## delete.retention.ms

`delete.retention.ms`

- is optional
- type: `string`
- defined in this schema

### delete.retention.ms Type

`string`

## description

The task's description

`description`

- is **required**
- type: `string`
- defined in this schema

### description Type

`string`

## details

`details`

- is **required**
- type: reference
- defined in this schema

### details Type

- []() – `#/definitions/IWorkflow`

## document

`document`

- is **required**
- type: `object`
- defined in this schema

### document Type

`object` with following properties:

| Property | Type   | Required | Default |
| -------- | ------ | -------- | ------- |
| `inputs` | object | Optional | `{}`    |
| `output` | object | Optional | `0`     |

#### inputs

Embedded json schema

`inputs`

- is optional
- type: `object`
- default: `{}`

##### inputs Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### output

Embedded json schema

`output`

- is optional
- type: `object`
- default: `0`

##### output Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## endTime

`endTime`

- is **required**
- type: `number`
- defined in this schema

### endTime Type

`number`

## error

`error`

- is **required**
- type: `string`
- defined in this schema

### error Type

`string`

## failureStrategy

The workflow's failure strategies

`failureStrategy`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#failurestrategy-known-values).

### failureStrategy Known Values

| Value                   | Description |
| ----------------------- | ----------- |
| `COMPENSATE`            |             |
| `COMPENSATE_THEN_RETRY` |             |
| `FAILED`                |             |
| `RECOVERY_WORKFLOW`     |             |
| `RETRY`                 |             |

## file.delete.delay.ms

`file.delete.delay.ms`

- is optional
- type: `string`
- defined in this schema

### file.delete.delay.ms Type

`string`

## flush.messages

`flush.messages`

- is optional
- type: `string`
- defined in this schema

### flush.messages Type

`string`

## flush.ms

`flush.ms`

- is optional
- type: `string`
- defined in this schema

### flush.ms Type

`string`

## follower.replication.throttled.replicas

`follower.replication.throttled.replicas`

- is optional
- type: `string`
- defined in this schema

### follower.replication.throttled.replicas Type

`string`

## index.interval.bytes

`index.interval.bytes`

- is optional
- type: `string`
- defined in this schema

### index.interval.bytes Type

`string`

## input

`input`

- is **required**
- type: `object`
- defined in this schema

### input Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## inputParameters

The input to be mapping to workflow's data

`inputParameters`

- is optional
- type: `object`
- default: `{}`
- defined in this schema

### inputParameters Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## isError

`isError`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#iserror-known-values).

### isError Known Values

| Value   | Description |
| ------- | ----------- |
| `false` |             |

## isRetried

`isRetried`

- is **required**
- type: `boolean`
- defined in this schema

### isRetried Type

`boolean`

## isSystem

`isSystem`

- is **required**
- type: `boolean`
- defined in this schema

### isSystem Type

`boolean`

## key

`key`

- is **required**
- type: `string`
- defined in this schema

### key Type

`string`

## leader.replication.throttled.replicas

`leader.replication.throttled.replicas`

- is optional
- type: `string`
- defined in this schema

### leader.replication.throttled.replicas Type

`string`

## logs

`logs`

- is optional
- type: complex
- defined in this schema

### logs Type

Unknown type ``.

```json
{
  "definitiongroup": "ITaskUpdate",
  "simpletype": "complex"
}
```

## max.message.bytes

`max.message.bytes`

- is optional
- type: `string`
- defined in this schema

### max.message.bytes Type

`string`

## message.downconversion.enable

`message.downconversion.enable`

- is optional
- type: `boolean`
- defined in this schema

### message.downconversion.enable Type

`boolean`

## message.format.version

`message.format.version`

- is optional
- type: `string`
- defined in this schema

### message.format.version Type

`string`

## message.timestamp.difference.max.ms

`message.timestamp.difference.max.ms`

- is optional
- type: `string`
- defined in this schema

### message.timestamp.difference.max.ms Type

`string`

## message.timestamp.type

`message.timestamp.type`

- is optional
- type: `string`
- defined in this schema

### message.timestamp.type Type

`string`

## min.cleanable.dirty.ratio

`min.cleanable.dirty.ratio`

- is optional
- type: `string`
- defined in this schema

### min.cleanable.dirty.ratio Type

`string`

## min.compaction.lag.ms

`min.compaction.lag.ms`

- is optional
- type: `string`
- defined in this schema

### min.compaction.lag.ms Type

`string`

## min.insync.replicas

`min.insync.replicas`

- is optional
- type: `string`
- defined in this schema

### min.insync.replicas Type

`string`

## name

The workflow's name

`name`

- is **required**
- type: `string`
- defined in this schema

### name Type

`string`

## offset

`offset`

- is **required**
- type: `number`
- defined in this schema

### offset Type

`number`

## output

`output`

- is **required**
- type: complex
- defined in this schema

### output Type

Unknown type ``.

```json
{
  "definitiongroup": "IWorkflowUpdate",
  "isrequired": true,
  "simpletype": "complex"
}
```

## outputParameters

The workflow's output mapping

`outputParameters`

- is **required**
- type: `object`
- defined in this schema

### outputParameters Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## parallelTasks

`parallelTasks`

- is **required**
- type: `array[]` (nested array)
- defined in this schema

### parallelTasks Type

Nested array type: `array`

All items must be of the type:

**Any** following _options_ needs to be fulfilled.

#### Option 1

- []() – `#/definitions/ITaskTask`

#### Option 2

- []() – `#/definitions/ICompensateTask`

#### Option 3

- []() – `#/definitions/IParallelTask`

#### Option 4

- []() – `#/definitions/IDecisionTask`

## partition

`partition`

- is **required**
- type: `number`
- defined in this schema

### partition Type

`number`

## preallocate

`preallocate`

- is optional
- type: `string`
- defined in this schema

### preallocate Type

`string`

## reason

`reason`

- is **required**
- type: `string`
- defined in this schema

### reason Type

`string`

## recoveryWorkflow

`recoveryWorkflow`

- is **required**
- type: reference
- defined in this schema

### recoveryWorkflow Type

- []() – `#/definitions/IWorkflowRef`

## retention.bytes

`retention.bytes`

- is optional
- type: `string`
- defined in this schema

### retention.bytes Type

`string`

## retention.ms

`retention.ms`

- is optional
- type: `string`
- defined in this schema

### retention.ms Type

`string`

## retries

`retries`

- is **required**
- type: `number`
- defined in this schema

### retries Type

`number`

## retry

Retry object

`retry`

- is **required**
- type: `object`
- defined in this schema

### retry Type

`object` with following properties:

| Property | Type   | Required     | Default |
| -------- | ------ | ------------ | ------- |
| `limit`  | number | **Required** | `0`     |

#### limit

Retry limit number (0 is no retry)

`limit`

- is **required**
- type: `number`
- default: `0`

##### limit Type

`number`

- minimum value: `0`

## retryDelay

`retryDelay`

- is **required**
- type: `number`
- defined in this schema

### retryDelay Type

`number`

## rev

The workflow's revision

`rev`

- is **required**
- type: `string`
- defined in this schema

### rev Type

`string`

## segment.bytes

`segment.bytes`

- is optional
- type: `string`
- defined in this schema

### segment.bytes Type

`string`

## segment.index.bytes

`segment.index.bytes`

- is optional
- type: `string`
- defined in this schema

### segment.index.bytes Type

`string`

## segment.jitter.ms

`segment.jitter.ms`

- is optional
- type: `string`
- defined in this schema

### segment.jitter.ms Type

`string`

## segment.ms

`segment.ms`

- is optional
- type: `string`
- defined in this schema

### segment.ms Type

`string`

## size

`size`

- is **required**
- type: `number`
- defined in this schema

### size Type

`number`

## startTime

`startTime`

- is **required**
- type: `number`
- defined in this schema

### startTime Type

`number`

## status

`status`

- is **required**
- type: reference
- defined in this schema

### status Type

- []() – `#/definitions/WorkflowStates`

## task

`task`

- is **required**
- type: reference
- defined in this schema

### task Type

- []() – `#/definitions/ITask`

## taskId

`taskId`

- is **required**
- type: `string`
- defined in this schema

### taskId Type

`string`

## taskName

`taskName`

- is **required**
- type: `string`
- defined in this schema

### taskName Type

`string`

## taskReferenceName

The referance name using in workflow

`taskReferenceName`

- is **required**
- type: `string`
- defined in this schema

### taskReferenceName Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters All instances must conform to this regular expression (test examples
  [here](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9-_%5D%2B%24)):

```regex
^[a-zA-Z0-9-_]+$
```

## tasks

`tasks`

- is **required**
- type: `array`
- defined in this schema

### tasks Type

Array type: `array`

All items must be of the type:

**Any** following _options_ needs to be fulfilled.

#### Option 1

- []() – `#/definitions/ITaskTask`

#### Option 2

- []() – `#/definitions/ICompensateTask`

#### Option 3

- []() – `#/definitions/IParallelTask`

#### Option 4

- []() – `#/definitions/IDecisionTask`

## timeout

The given time that task can finish before it timeout in miliseconds (0 is no timeout)

`timeout`

- is **required**
- type: `number`
- defined in this schema

### timeout Type

`number`

## timestamp

`timestamp`

- is **required**
- type: `number`
- defined in this schema

### timestamp Type

`number`

## topic

`topic`

- is **required**
- type: `string`
- defined in this schema

### topic Type

`string`

## transactionId

`transactionId`

- is **required**
- type: `string`
- defined in this schema

### transactionId Type

`string`

## type

`type`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value      | Description |
| ---------- | ----------- |
| `WORKFLOW` |             |

## unclean.leader.election.enable

`unclean.leader.election.enable`

- is optional
- type: `boolean`
- defined in this schema

### unclean.leader.election.enable Type

`boolean`

## value

Raw data is stored in instances of the Buffer class. A Buffer is similar to an array of integers but corresponds to a
raw memory allocation outside the V8 heap. A Buffer cannot be resized. Valid string encodings:
'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'

`value`

- is **required**
- type: `object`
- defined in this schema

### value Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## workflow

`workflow`

- is **required**
- type: reference
- defined in this schema

### workflow Type

- []() – `#/definitions/IWorkflowRef`

## workflowDefinition

`workflowDefinition`

- is **required**
- type: reference
- defined in this schema

### workflowDefinition Type

- []() – `#/definitions/IWorkflowDefinition`

## workflowId

`workflowId`

- is **required**
- type: `string`
- defined in this schema

### workflowId Type

`string`
