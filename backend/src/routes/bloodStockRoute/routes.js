const express = require('express');
const bloodStockController = require('../../controllers/bloodStockController/controller');
const bloodStockRoutes = express.Router();

bloodStockRoutes.get('/', bloodStockController.getAllData);

module.exports = bloodStockRoutes;
