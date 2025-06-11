const jwt = require('jsonwebtoken');
const { CODE } = require('../../config/errorConfig');
const CONFIG = require('../../config/env.config');
const { AuthenticateError } = require('../errors/errorTypes');

const authenticate = function (req, res, next) {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      throw new AuthenticateError('Tidak ada access token', CODE.authorized);
    }

    const decoded = jwt.verify(accessToken, CONFIG.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res
        .status(CODE.authorized)
        .json({ status: 'error', message: 'Token kadaluarsa' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res
        .status(CODE.authorized)
        .json({ status: 'error', message: 'Token tidak valid' });
    }

    // error lain
    next(error);
  }
};

const authorizeRole = (...validRole) => {
  return (req, res, next) => {
    try {
      const { role } = req.user;
      if (!validRole.includes(role)) {
        throw new AuthenticateError('Akses ditolak', CODE.forbidden);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { authenticate, authorizeRole };
