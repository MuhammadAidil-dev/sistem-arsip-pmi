const { CODE } = require('../../config/errorConfig');

const bloodStockController = {
  getAllData: (req, res, next) => {
    return res.status(CODE.success).json({
      status: 'success',
      message: 'Berhasil mengambil data stok',
    });
  },
};

module.exports = bloodStockController;
