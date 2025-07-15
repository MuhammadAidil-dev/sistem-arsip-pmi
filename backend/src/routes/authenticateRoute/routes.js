const express = require('express');
const {
  validateRequest,
} = require('../../middlewares/validations/validationRequest');
const userController = require('../../controllers/userController/controller');
const {
  registerUserSchema,
  loginUserSchema,
} = require('../../lib/validations/user.validations');
const {
  authenticate,
} = require('../../middlewares/authenticate/authenticateMiddlewares');

const authenticateRoutes = express.Router();

authenticateRoutes.post(
  '/register',
  validateRequest(registerUserSchema),
  userController.registerUser
);
authenticateRoutes.post(
  '/login',
  validateRequest(loginUserSchema),
  userController.loginUser
);
authenticateRoutes.post('/logout', userController.logoutUser);
authenticateRoutes.get('/check-auth', authenticate, userController.checkAuth);

module.exports = authenticateRoutes;
