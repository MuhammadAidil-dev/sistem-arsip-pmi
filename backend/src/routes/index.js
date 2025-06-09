const express = require('express');
const bloodStockRoutes = require('./bloodStockRoute/routes');
const routes = express.Router();

routes.use('/blood-stock', bloodStockRoutes);

module.exports = routes;
