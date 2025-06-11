const express = require('express');
const bloodStockRoutes = require('./bloodStockRoute/routes');
const authenticateRoutes = require('./authenticateRoute/routes');
const routes = express.Router();

routes.use('/blood-stock', bloodStockRoutes);
routes.use('/auth', authenticateRoutes);

module.exports = routes;
