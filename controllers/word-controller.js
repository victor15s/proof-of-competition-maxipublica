'use strict';

const { internalServerError } = require('../exceptions/internal-server-error');
const wordRepository = require('../repositories/word-repository');
const { statusCodes } = require('../enums/status-codes');

const search = async (req, res) => {
  const words = await wordRepository.getAll().catch(() =>{
    return res.status(statusCodes.internalServerError).send(internalServerError);
  });
  return res.status(statusCodes.ok).send(words);
}
  
const create = async (req, res) => {
  const { body } = req;
  const word = await wordRepository.create(body).catch(() => { 
   return res.status(statusCodes.internalServerError).send(internalServerError);
  });

  return res.status(statusCodes.created).send(word);
}

const getById = async  (req, res) => {
  const { params: { id } } = req;
  const word = await wordRepository.getById(id).catch(() => {
    return res.status(statusCodes.internalServerError).send(internalServerError);
  });

  return res.status(statusCodes.ok).send(word);
}

const updateByid = async (req, res) => {
  const { params: { id }} = req;
  const { body }= req;
  const word = await wordRepository.updateByid(id, body).catch(() => {
    return res.status(statusCodes.internalServerError).send(internalServerError);
  });

  return res.status(statusCodes.ok).send(word);  
}

const softDeleteById = async (req, res) => {
  const { params: { id } } = req;
  const word = await wordRepository.getById(id).catch(() => {
    return res.status(statusCodes.internalServerError).send(internalServerError);
  });
  await wordRepository.softDeleteById(id, word);

  return res.status(statusCodes.ok).send({
    status: statusCodes.ok,
    message: `word ${word.word} deleted`,
    customMessage: `la palabra o frase ${word.word} fue eliminada`,
  });
}

module.exports = { create , getById, search, updateByid, softDeleteById };