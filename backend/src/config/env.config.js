require('dotenv').config();

// Validasi env yang wajib ada
const requiredEnvVars = ['PORT', 'DB_HOST', 'DB_USER', 'DB_NAME', 'DB_DIALECT'];

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    console.log(`Environment variable ${key} is required but not defined.`);
    throw new Error('Error configuration env');
  }
});

const CONFIG = {
  PORT: process.env.PORT || '3000',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_NAME: process.env.DB_NAME || 'mydatabase',
  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
};

module.exports = CONFIG;
