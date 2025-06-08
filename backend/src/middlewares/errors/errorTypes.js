const { CODE, ERROR_OBJ } = require('../../config/errorConfig');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = ERROR_OBJ.notFound;
    this.statusCode = CODE.notFound;
  }
}

class ValidationRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = ERROR_OBJ.validationError;
    this.statusCode = CODE.bad;
  }
}

module.exports = { NotFoundError, ValidationRequestError };
