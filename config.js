const config = {
  env: process.env.NODE_ENV || 'local',
  server: {
    port: process.env.SERVER_PORT || 8080
  },
  redis: {
    port: process.env.REDIS_PORT || 6379,
    host: process.env.REDIS_HOST || '127.0.0.1',
    password: process.env.REDIS_PASSWORD || ''
  }
}

module.exports = { config }