const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/config');
const bcrypt = require('bcrypt');

const User = sequelize.define(
  'User',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email sudah terdaftar',
      },
      validate: {
        isEmail: {
          msg: 'Email tidak valid',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: 'Password harus terdiri minimal 8 karakter',
        },
      },
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      defaultValue: 'user',
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

// checking valid password
User.prototype.validatePassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

module.exports = User;
