const { ValidationRequestError } = require('../errors/errorTypes');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const validationError = new ValidationRequestError(
        error.details[0].message
      );
      validationError.path = error.details[0].path;
      return next(validationError);
    }

    next();
  };
};

module.exports = { validateRequest };
