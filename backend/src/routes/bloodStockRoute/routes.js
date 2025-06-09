const express = require('express');
const bloodStockController = require('../../controllers/bloodStockController/controller');
const {
  validateRequest,
} = require('../../middlewares/validations/validationRequest');
const {
  createBloodStockSchema,
} = require('../../lib/validations/bloodStock.validations');
const bloodStockRoutes = express.Router();

bloodStockRoutes.get('/', bloodStockController.getAllData);
bloodStockRoutes.post(
  '/',
  validateRequest(createBloodStockSchema),
  bloodStockController.createStock
);

module.exports = bloodStockRoutes;
