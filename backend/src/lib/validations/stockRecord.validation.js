const Joi = require('joi');

const createRecordSchema = Joi.object({
  id_record: Joi.string().required(),
  note: Joi.string().optional(),
});

module.exports = { createRecordSchema };
