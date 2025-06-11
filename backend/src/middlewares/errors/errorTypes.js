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

class AuthenticateError extends Error {
  constructor(message, statusCode) {
    super(message, statusCode);
    this.name = ERROR_OBJ.authenticateError;
    this.statusCode = statusCode || CODE.authorized;
  }
}

module.exports = { NotFoundError, ValidationRequestError, AuthenticateError };
