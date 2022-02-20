'use strict';

const express = require('express');
const wordRouter = express.Router();

const { create, getById, search, updateByid, softDeleteById } = require('../controllers/word-controller');
const { existById, validateCreate } = require ('../middlewares/word-middeleware');

wordRouter.route('/')
  .get(search)
  .post(validateCreate, create);

wordRouter.route('/:id')
  .get(existById, getById)
  .put(existById, updateByid)
  .delete(existById, softDeleteById);
    
module.exports = { wordRouter};