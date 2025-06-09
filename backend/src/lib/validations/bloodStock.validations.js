const Joi = require('joi');

const createBloodStockSchema = Joi.object({
  blood_type: Joi.string().valid('A', 'B', 'AB', 'O').required(),
  rhesus: Joi.string().valid('+', '-').required(),
  blood_component_type: Joi.string()
    .valid('WB', 'PRC', 'TC', 'FFP', 'CRYO')
    .required(),
  quantity: Joi.number().integer().min(0).required(),
});

module.exports = { createBloodStockSchema };
