const CONFIG = require('../src/config/env.config');

module.exports = {
  development: {
    username: CONFIG.DB_USER || 'root',
    password: CONFIG.DB_PASSWORD || null,
    database: CONFIG.DB_NAME || 'database_development',
    host: CONFIG.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: CONFIG.DB_USER || 'root',
    password: CONFIG.DB_PASSWORD || null,
    database: CONFIG.DB_NAME_TEST || 'database_test',
    host: CONFIG.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: CONFIG.DB_USER || 'root',
    password: CONFIG.DB_PASSWORD || null,
    database: CONFIG.DB_NAME_PROD || 'database_production',
    host: CONFIG.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
};
