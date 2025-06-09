const Joi = require('joi');

const createBloodStockSchema = Joi.object({
  blood_type: Joi.string().valid('A', 'B', 'AB', 'O').required(),
  rhesus: Joi.string().valid('+', '-').required(),
  blood_component_type: Joi.string()
    .valid('WB', 'PRC', 'TC', 'FFP', 'CRYO')
    .required(),
  quantity: Joi.number().integer().min(0).required(),
});

const updateBloodStockSchema = Joi.object({
  blood_type: Joi.string().valid('A', 'B', 'AB', 'O').optional(),
  rhesus: Joi.string().valid('+', '-').optional(),
  blood_component_type: Joi.string()
    .valid('WB', 'PRC', 'TC', 'FFP', 'CRYO')
    .optional(),
  quantity: Joi.number().integer().min(0).optional(),
});

module.exports = { createBloodStockSchema, updateBloodStockSchema };
