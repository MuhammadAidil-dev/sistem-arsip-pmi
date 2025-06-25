const { CODE } = require('../../config/errorConfig');
const StockRecord = require('../../models/stockRecordModel/model');

const stockRecordController = {
  getAllRecord: async (req, res, next) => {
    console.log('Controller: getAllRecord dipanggil');
    try {
      const stockRecord = await StockRecord.findAll();

      return res.status(CODE.success).json({
        status: 'success',
        message: 'Berhasil mengambil data rekaman stok darah',
        data: stockRecord,
      });
    } catch (error) {
      next(error);
    }
  },
  createRecord: async (req, res, next) => {
    console.log('Controller: createRecord dipanggil');
    try {
      const { id_record, note } = req.body;

      const record = await StockRecord.create({
        id_record,
        note,
      });

      return res.status(CODE.created).json({
        status: 'success',
        message: 'Berhasil menambahkan rekaman stok',
        data: record,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = stockRecordController;
