require('dotenv').config(); // dotenv

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'e_library',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'e_library',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'e_library',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
