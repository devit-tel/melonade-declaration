export const topicPrefix = 'melonade';

export enum topicSuffix {
  event = 'event',
  store = 'store',
  systemTask = 'system-task',
  task = 'task',
  command = 'command',
}

export interface kafkaConsumerMessage {
  value: Buffer;
  size: number;
  key: string;
  topic: string;
  offset: number;
  partition: number;
}

// https://docs.confluent.io/current/installation/configuration/topic-configs.html
export interface TopicConfigurations {
  'cleanup.policy'?: 'compact' | 'delete';
  'compression.type'?:
    | 'uncompressed'
    | 'zstd'
    | 'lz4'
    | 'snappy'
    | 'gzip'
    | 'producer';
  'delete.retention.ms'?: string;
  'file.delete.delay.ms'?: string;
  'flush.messages'?: string;
  'flush.ms'?: string;
  'follower.replication.throttled.replicas'?: string;
  'index.interval.bytes'?: string;
  'leader.replication.throttled.replicas'?: string;
  'max.message.bytes'?: string;
  'message.format.version'?: string;
  'message.timestamp.difference.max.ms'?: string;
  'message.timestamp.type'?: string;
  'min.cleanable.dirty.ratio'?: string;
  'min.compaction.lag.ms'?: string;
  'min.insync.replicas'?: string;
  preallocate?: string;
  'retention.bytes'?: string;
  'retention.ms'?: string;
  'segment.bytes'?: string;
  'segment.index.bytes'?: string;
  'segment.jitter.ms'?: string;
  'segment.ms'?: string;
  'unclean.leader.election.enable'?: boolean;
  'message.downconversion.enable'?: boolean;
}
