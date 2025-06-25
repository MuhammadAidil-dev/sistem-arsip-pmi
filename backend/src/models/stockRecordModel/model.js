const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/config');

const StockRecord = sequelize.define('StockRecord', {
  id_record: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'id stok tidak boleh kosong',
      },
    },
  },
  note: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = StockRecord;
