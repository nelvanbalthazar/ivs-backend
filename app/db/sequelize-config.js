const config = require('../../config');

module.exports = {
  development: {
    username: config.get('DB_USER'),
    password: config.get('DB_PASS'),
    database: config.get('DB_NAME'),
    host: config.get('DB_HOST'),
    dialect: 'postgres',
    dialectOptions: {
      ssl: false,
    },
  },
  test: {
    username: config.get('DB_USER'),
    password: config.get('DB_PASS'),
    database: config.get('DB_NAME'),
    host: config.get('DB_HOST'),
    dialect: 'postgres',
    dialectOptions: {
      ssl: false,
    },
  },
  production: {
    username: config.get('DB_USER'),
    password: config.get('DB_PASS'),
    database: config.get('DB_NAME'),
    host: config.get('DB_HOST'),
    dialect: 'postgres',
    dialectOptions: {
      ssl: false,
    },
  },
};
