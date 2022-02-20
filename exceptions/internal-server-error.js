'use strict';

const { statusCodes } = require('../enums/status-codes');

const internalServerError = {
  status: statusCodes.internalServerError,
  name: 'Internal Server Error',
  message: 'Internal Server Error',
  CustomMessage: 'El servidor ha encontrado un error',
};

module.exports = { internalServerError };