'use strict';

const wordRepository = require('../repositories/word-repository');
const { notFound, invalidObjectId, invalidBody } = require('../exceptions/bad-request');
const { statusCodes } = require('../enums/status-codes');
const Joi = require('joi');

const existById = async (req, res, next) => {
  const { params: { id } } = req;
  const word = await wordRepository.getById(id).catch(() => {
    return res.status(statusCodes.badRequest).send(invalidObjectId);
  });

  if (!word) return res.status(statusCodes.notFound).send(notFound);

  next();
}
const validateCreate = (req, res, next) => {
  const { body } = req;

  if (!body) return res.status(statusCodes.badRequest).send(invalidBody);

  const createWordSchema = Joi.object({
    word: Joi.string().required().messages({ 'any.required': 'word es requerido'}),
    allow: Joi.bool().required().messages({ 'any.required': 'allow es requerido'}),
 });
  const { error } = createWordSchema.validate(body);

  if (error) {
    invalidBody.customMessage = error.message;
    return res.status(statusCodes.badRequest).send(invalidBody);
  }

  next();
}

module.exports = { existById, validateCreate };
