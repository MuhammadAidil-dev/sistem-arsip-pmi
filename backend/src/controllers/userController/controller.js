const { Op } = require('sequelize');
const { CODE } = require('../../config/errorConfig');
const User = require('../../models/userModel/model');
const {
  NotFoundError,
  ValidationRequestError,
} = require('../../middlewares/errors/errorTypes');
const { createToken } = require('../../lib/jwt/jwt');
const CONFIG = require('../../config/env.config');

const userController = {
  registerUser: async (req, res, next) => {
    try {
      const payload = req.body;

      await User.create(payload);

      return res.status(CODE.created).json({
        status: 'success',
        message: 'Berhasil medaftarkan akun',
      });
    } catch (error) {
      // error sequelize
      if (error.name === 'SequelizeUniqueConstraintError') {
        error.statusCode = CODE.bad;
        return next(error);
      }

      next(error);
    }
  },
  loginUser: async (req, res, next) => {
    try {
      const { email, password: inputPassword } = req.body;
      const authUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!authUser) {
        throw new ValidationRequestError('Kredensial tidak valid');
      }

      const isValid = await authUser.validatePassword(inputPassword);

      if (!isValid) {
        throw new ValidationRequestError('Kredensial tidak valid');
      }

      // menghilangkan properti password
      const { password, ...user } = authUser.dataValues;

      // membuat token
      const token = createToken(user);

      // simpan token di cookies server side
      res.cookie('accessToken', token, {
        httpOnly: true,
        secure: CONFIG.NODE_DEV === 'production',
        sameSite: 'strict',
      });

      return res.status(CODE.success).json({
        status: 'success',
        message: 'Berhasil login',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
  logoutUser: async (req, res, next) => {
    try {
      res.clearCookie('accessToken');
      res.status(CODE.success).json({
        status: 'success',
        message: 'Berhasil logout',
      });
    } catch (error) {
      next(error);
    }
  },
  checkAuth: async (req, res, next) => {
    try {
      const user = req.user;
      res.status(CODE.success).json({
        status: 'success',
        message: 'Berhasil mengambil data user login',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
