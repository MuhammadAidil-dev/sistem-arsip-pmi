const Joi = require('joi');

const registerUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().valid('user', 'admin').default('user'),
});

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

module.exports = { registerUserSchema, loginUserSchema };
