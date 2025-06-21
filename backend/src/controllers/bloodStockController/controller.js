const { Op } = require('sequelize');
const { CODE } = require('../../config/errorConfig');
const { NotFoundError } = require('../../middlewares/errors/errorTypes');
const BloodStock = require('../../models/bloodStockModel/model');

const bloodStockController = {
  getAllData: async (req, res, next) => {
    console.log('Controller: getAllData dipanggil');
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
    console.log('Controller: createStock dipanggil');
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
  updateStock: async (req, res, next) => {
    console.log('Controller: updatedStock dipanggil');
    try {
      const payload = req.body;
      const { id } = req.params;
      const bloodStock = await BloodStock.findByPk(id);
      if (!bloodStock) {
        throw new NotFoundError('Data tidak ditemukan');
      }

      const updatedStock = await bloodStock.update(payload);
      return res.status(CODE.success).json({
        status: 'success',
        message: 'Berhasil memperbarui data stok',
        data: updatedStock,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteStock: async (req, res, next) => {
    console.log('Controller: deleteStock dipanggil');
    try {
      const { id } = req.params;
      const bloodStock = await BloodStock.findByPk(id);
      if (!bloodStock) {
        throw new NotFoundError('Data tidak ditemukan');
      }

      await bloodStock.destroy();
      return res.status(CODE.success).json({
        status: 'success',
        message: 'Berhasil menghapus data stok',
      });
    } catch (error) {
      next(error);
    }
  },
  updateQuantity: async (req, res, next) => {
    console.log('Controller: updateQuantity dipanggil');
    try {
      const { blood_type, rhesus, blood_component_type, quantity } = req.body;
      const bloodStock = await BloodStock.findOne({
        where: {
          [Op.and]: [{ blood_type }, { rhesus }, { blood_component_type }],
        },
      });
      if (!bloodStock) {
        throw new NotFoundError('Data tidak ditemukan');
      }

      const updatedStock = await bloodStock.update({ quantity });
      return res.status(CODE.success).json({
        status: 'success',
        message: 'Berhasil memperbarui data stok',
        data: updatedStock,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = bloodStockController;
