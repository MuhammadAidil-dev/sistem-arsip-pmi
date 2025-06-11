const { ERROR_OBJ, CODE } = require('../../config/errorConfig');

const errorHandler = (err, req, res, next) => {
  console.log('err', {
    name: err.name || 'Error',
    status: 'error',
    message: err.message || 'Error',
    path: err.path || '',
    statusCode: err.statusCode || 500,
  });
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

    case ERROR_OBJ.authenticateError:
      return res.status(err.statusCode).json({
        status: 'error',
        message: err.message || 'Not authenticated',
      });

    default:
      return res.status(err.statusCode || CODE.error).json({
        status: 'error',
        message: err.message || 'Internal server error',
      });
  }
};

module.exports = errorHandler;
