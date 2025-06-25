const express = require('express');
const bloodStockRoutes = require('./bloodStockRoute/routes');
const authenticateRoutes = require('./authenticateRoute/routes');
const stockRecordRoutes = require('./stockRecordRoute/route');
const routes = express.Router();

routes.use('/blood-stock', bloodStockRoutes);
routes.use('/auth', authenticateRoutes);
routes.use('/stock-record', stockRecordRoutes);

module.exports = routes;
