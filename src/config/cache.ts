import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';

  configs: {
    redis: RedisOptions;
  };
}

export default {
  driver: 'redis',

  configs: {
    redis: {
      host: 'localhost',
      port: 6379,
      password: undefined,
    },
  },
} as ICacheConfig;
