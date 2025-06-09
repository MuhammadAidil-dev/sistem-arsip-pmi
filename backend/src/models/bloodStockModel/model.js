const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/config');

const BloodStock = sequelize.define(
  'BloodStock',
  {
    blood_type: {
      type: DataTypes.ENUM,
      values: ['A', 'B', 'AB', 'O'],
      allowNull: false,
      validate: {
        isIn: {
          args: [['A', 'B', 'AB', 'O']],
          msg: 'Blood type must be one of A, B, AB, or O',
        },
      },
    },
    rhesus: {
      type: DataTypes.ENUM,
      values: ['+', '-'],
      allowNull: false,
      defaultValue: '+',
      validate: {
        isIn: {
          args: [['+', '-']],
          msg: 'Rhesus must be one of + or -',
        },
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    blood_component_type: {
      type: DataTypes.ENUM,
      values: ['WB', 'PRC', 'TC'],
      defaultValue: 'WB',
      validate: {
        isIn: {
          args: [['WB', 'PRC', 'TC']],
          msg: 'Blood component type must be one of WB, PRC, or TC',
        },
      },
    },
    notes: {
      type: DataTypes.TEXT,
    },
  },
  {
    indexes: [
      {
        unique: true, // create unique composite
        fields: ['blood_type', 'rhesus', 'blood_component_type'],
      },
    ],
  }
);

module.exports = BloodStock;
