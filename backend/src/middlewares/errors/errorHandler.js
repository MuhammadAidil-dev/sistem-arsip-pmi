const { ERROR_OBJ, CODE } = require('../../config/errorConfig');

const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case ERROR_OBJ.notFound:
      return res.status(err.statusCode).json({
        status: 'error',
        message: err.message || 'Not found error',
      });

    case ERROR_OBJ.validationError:
      return res.status(err.statusCode).json({
        status: 'error',
        message: err.message || 'Validation error',
      });

    default:
      return res.status(CODE.error).json({
        status: 'error',
        message: err.message || 'Internal server error',
      });
  }
};

module.exports = errorHandler;
