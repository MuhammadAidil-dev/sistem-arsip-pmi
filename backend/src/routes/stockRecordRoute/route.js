const express = require('express');
const {
  validateRequest,
} = require('../../middlewares/validations/validationRequest');

const stockRecordController = require('../../controllers/stockRecordController/controller');
const {
  createRecordSchema,
} = require('../../lib/validations/stockRecord.validation');
const {
  authenticate,
  authorizeRole,
} = require('../../middlewares/authenticate/authenticateMiddlewares');
const stockRecordRoutes = express.Router();

// static route
stockRecordRoutes.get('/', stockRecordController.getAllRecord);
stockRecordRoutes.post(
  '/',
  authenticate,
  authorizeRole('admin'),
  validateRequest(createRecordSchema),
  stockRecordController.createRecord
);

module.exports = stockRecordRoutes;
