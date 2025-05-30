const { Sequelize } = require('sequelize');
const CONFIG = require('./env.config');

const sequelize = new Sequelize(
  CONFIG.DB_NAME,
  CONFIG.DB_USER,
  CONFIG.DB_PASSWORD,
  {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT,
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

// sinkronisasi database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database sync');
  } catch (error) {
    console.log('Error to sync database', error);
  }
};

module.exports = { sequelize, syncDatabase };
