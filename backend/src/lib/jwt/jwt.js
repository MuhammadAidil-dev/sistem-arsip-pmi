const jwt = require('jsonwebtoken');
const CONFIG = require('../../config/env.config');

const createToken = (payload) => {
  return jwt.sign(payload, CONFIG.JWT_SECRET_KEY, { expiresIn: '7d' });
};

const verifyToken = (token) => {
  return jwt.verify(token, CONFIG.JWT_SECRET_KEY);
};

module.exports = { createToken, verifyToken };
