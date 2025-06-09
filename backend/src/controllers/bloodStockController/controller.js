const { CODE } = require('../../config/errorConfig');
const BloodStock = require('../../models/bloodStockModel/model');

const bloodStockController = {
  getAllData: async (req, res, next) => {
    try {
      const bloodStocks = await BloodStock.findAll();

      return res.status(CODE.success).json({
        status: 'success',
        message: 'Berhasil mengambil data stok darah',
        data: bloodStocks,
      });
    } catch (error) {
      next(error);
    }
    return res.status(CODE.success).json({
      status: 'success',
      message: 'Berhasil mengambil data stok',
    });
  },
  createStock: async (req, res, next) => {
    try {
      const { blood_type, rhesus, quantity, blood_component_type } = req.body;
      const bloodStocks = await BloodStock.findAll();

      // cek jika data sudah ada
      bloodStocks.forEach((data) => {
        if (
          data.blood_type === blood_type &&
          data.rhesus === rhesus &&
          data.blood_component_type === blood_component_type
        ) {
          const error = new Error('Data sudah ada');
          error.name = 'SequelizeUniqueConstraintError';
          throw error;
        }
      });

      const stock = await BloodStock.create({
        blood_type,
        rhesus,
        quantity,
        blood_component_type,
      });

      return res.status(CODE.created).json({
        status: 'success',
        message: 'Berhasil menambahkan data stok',
        data: stock,
      });
    } catch (error) {
      // handle error start with sequelize
      if (error.name === 'SequelizeUniqueConstraintError') {
        error.message =
          error.message ||
          'Combination of blood type, rhesus, and component must be unique';
        error.statusCode = CODE.bad;
        return next(error);
      }

      next(error);
    }
  },
};

module.exports = bloodStockController;
