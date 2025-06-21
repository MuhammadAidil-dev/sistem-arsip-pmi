const express = require('express');
const bloodStockController = require('../../controllers/bloodStockController/controller');
const {
  validateRequest,
} = require('../../middlewares/validations/validationRequest');

const {
  createBloodStockSchema,
  updateBloodStockSchema,
  updateQuantitySchema,
} = require('../../lib/validations/bloodStock.validations');
const {
  authenticate,
  authorizeRole,
} = require('../../middlewares/authenticate/authenticateMiddlewares');
const bloodStockRoutes = express.Router();

// static route
bloodStockRoutes.get('/', bloodStockController.getAllData);
bloodStockRoutes.post(
  '/',
  authenticate,
  authorizeRole('admin'),
  validateRequest(createBloodStockSchema),
  bloodStockController.createStock
);
bloodStockRoutes.put(
  '/stock',
  validateRequest(updateQuantitySchema),
  bloodStockController.updateQuantity
);

// dynamic route
bloodStockRoutes.put(
  '/:id',
  authenticate,
  authorizeRole('admin'),
  validateRequest(updateBloodStockSchema),
  bloodStockController.updateStock
);
bloodStockRoutes.delete('/:id', bloodStockController.deleteStock);

module.exports = bloodStockRoutes;
