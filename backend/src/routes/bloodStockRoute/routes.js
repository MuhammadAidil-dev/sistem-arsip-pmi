const express = require('express');
const bloodStockController = require('../../controllers/bloodStockController/controller');
const {
  validateRequest,
} = require('../../middlewares/validations/validationRequest');
const {
  createBloodStockSchema,
  updateBloodStockSchema,
} = require('../../lib/validations/bloodStock.validations');
const bloodStockRoutes = express.Router();

bloodStockRoutes.get('/', bloodStockController.getAllData);
bloodStockRoutes.post(
  '/',
  validateRequest(createBloodStockSchema),
  bloodStockController.createStock
);
bloodStockRoutes.put(
  '/:id',
  validateRequest(updateBloodStockSchema),
  bloodStockController.updateStock
);
bloodStockRoutes.delete('/:id', bloodStockController.deleteStock);

module.exports = bloodStockRoutes;
