[@melonade/melonade-declaration - v0.7.7](../README.md) › [Globals](../globals.md) › ["kafka"](../modules/_kafka_.md) › [TopicConfigurations](_kafka_.topicconfigurations.md)

# Interface: TopicConfigurations

## Hierarchy

* **TopicConfigurations**

## Index

### Properties

* [cleanup.policy](_kafka_.topicconfigurations.md#optional-cleanup.policy)
* [compression.type](_kafka_.topicconfigurations.md#optional-compression.type)
* [delete.retention.ms](_kafka_.topicconfigurations.md#optional-delete.retention.ms)
* [file.delete.delay.ms](_kafka_.topicconfigurations.md#optional-file.delete.delay.ms)
* [flush.messages](_kafka_.topicconfigurations.md#optional-flush.messages)
* [flush.ms](_kafka_.topicconfigurations.md#optional-flush.ms)
* [follower.replication.throttled.replicas](_kafka_.topicconfigurations.md#optional-follower.replication.throttled.replicas)
* [index.interval.bytes](_kafka_.topicconfigurations.md#optional-index.interval.bytes)
* [leader.replication.throttled.replicas](_kafka_.topicconfigurations.md#optional-leader.replication.throttled.replicas)
* [max.message.bytes](_kafka_.topicconfigurations.md#optional-max.message.bytes)
* [message.downconversion.enable](_kafka_.topicconfigurations.md#optional-message.downconversion.enable)
* [message.format.version](_kafka_.topicconfigurations.md#optional-message.format.version)
* [message.timestamp.difference.max.ms](_kafka_.topicconfigurations.md#optional-message.timestamp.difference.max.ms)
* [message.timestamp.type](_kafka_.topicconfigurations.md#optional-message.timestamp.type)
* [min.cleanable.dirty.ratio](_kafka_.topicconfigurations.md#optional-min.cleanable.dirty.ratio)
* [min.compaction.lag.ms](_kafka_.topicconfigurations.md#optional-min.compaction.lag.ms)
* [min.insync.replicas](_kafka_.topicconfigurations.md#optional-min.insync.replicas)
* [preallocate](_kafka_.topicconfigurations.md#optional-preallocate)
* [retention.bytes](_kafka_.topicconfigurations.md#optional-retention.bytes)
* [retention.ms](_kafka_.topicconfigurations.md#optional-retention.ms)
* [segment.bytes](_kafka_.topicconfigurations.md#optional-segment.bytes)
* [segment.index.bytes](_kafka_.topicconfigurations.md#optional-segment.index.bytes)
* [segment.jitter.ms](_kafka_.topicconfigurations.md#optional-segment.jitter.ms)
* [segment.ms](_kafka_.topicconfigurations.md#optional-segment.ms)
* [unclean.leader.election.enable](_kafka_.topicconfigurations.md#optional-unclean.leader.election.enable)

## Properties

### `Optional` cleanup.policy

• **cleanup.policy**? : *"compact" | "delete"*

*Defined in [src/kafka.ts:22](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L22)*

___

### `Optional` compression.type

• **compression.type**? : *"uncompressed" | "zstd" | "lz4" | "snappy" | "gzip" | "producer"*

*Defined in [src/kafka.ts:23](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L23)*

___

### `Optional` delete.retention.ms

• **delete.retention.ms**? : *string*

*Defined in [src/kafka.ts:30](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L30)*

___

### `Optional` file.delete.delay.ms

• **file.delete.delay.ms**? : *string*

*Defined in [src/kafka.ts:31](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L31)*

___

### `Optional` flush.messages

• **flush.messages**? : *string*

*Defined in [src/kafka.ts:32](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L32)*

___

### `Optional` flush.ms

• **flush.ms**? : *string*

*Defined in [src/kafka.ts:33](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L33)*

___

### `Optional` follower.replication.throttled.replicas

• **follower.replication.throttled.replicas**? : *string*

*Defined in [src/kafka.ts:34](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L34)*

___

### `Optional` index.interval.bytes

• **index.interval.bytes**? : *string*

*Defined in [src/kafka.ts:35](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L35)*

___

### `Optional` leader.replication.throttled.replicas

• **leader.replication.throttled.replicas**? : *string*

*Defined in [src/kafka.ts:36](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L36)*

___

### `Optional` max.message.bytes

• **max.message.bytes**? : *string*

*Defined in [src/kafka.ts:37](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L37)*

___

### `Optional` message.downconversion.enable

• **message.downconversion.enable**? : *boolean*

*Defined in [src/kafka.ts:52](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L52)*

___

### `Optional` message.format.version

• **message.format.version**? : *string*

*Defined in [src/kafka.ts:38](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L38)*

___

### `Optional` message.timestamp.difference.max.ms

• **message.timestamp.difference.max.ms**? : *string*

*Defined in [src/kafka.ts:39](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L39)*

___

### `Optional` message.timestamp.type

• **message.timestamp.type**? : *string*

*Defined in [src/kafka.ts:40](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L40)*

___

### `Optional` min.cleanable.dirty.ratio

• **min.cleanable.dirty.ratio**? : *string*

*Defined in [src/kafka.ts:41](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L41)*

___

### `Optional` min.compaction.lag.ms

• **min.compaction.lag.ms**? : *string*

*Defined in [src/kafka.ts:42](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L42)*

___

### `Optional` min.insync.replicas

• **min.insync.replicas**? : *string*

*Defined in [src/kafka.ts:43](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L43)*

___

### `Optional` preallocate

• **preallocate**? : *string*

*Defined in [src/kafka.ts:44](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L44)*

___

### `Optional` retention.bytes

• **retention.bytes**? : *string*

*Defined in [src/kafka.ts:45](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L45)*

___

### `Optional` retention.ms

• **retention.ms**? : *string*

*Defined in [src/kafka.ts:46](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L46)*

___

### `Optional` segment.bytes

• **segment.bytes**? : *string*

*Defined in [src/kafka.ts:47](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L47)*

___

### `Optional` segment.index.bytes

• **segment.index.bytes**? : *string*

*Defined in [src/kafka.ts:48](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L48)*

___

### `Optional` segment.jitter.ms

• **segment.jitter.ms**? : *string*

*Defined in [src/kafka.ts:49](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L49)*

___

### `Optional` segment.ms

• **segment.ms**? : *string*

*Defined in [src/kafka.ts:50](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L50)*

___

### `Optional` unclean.leader.election.enable

• **unclean.leader.election.enable**? : *boolean*

*Defined in [src/kafka.ts:51](https://github.com/devit-tel/melonade-declaration/blob/7d6c74f/src/kafka.ts#L51)*
