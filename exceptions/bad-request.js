'use strict';

const { statusCodes } = require ('../enums/status-codes');

const notFound = {
  status: statusCodes.notFound,
  name: 'Not Found',
  message: 'word not found',
  customMessage: 'Palabra no encontrada',
};

const invalidObjectId = {
  status: statusCodes.badRequest,
  name: 'Bad request',
  message: 'invalid Object ID',
  customMessage: 'ID invalido',
};

const invalidBody = {
  status: statusCodes.badRequest,
  name: 'Bad request',
  message: 'invalid body',
  customMessage: 'El cuerpo no puede estar vacio',
};

module.exports = { notFound, invalidObjectId, invalidBody };