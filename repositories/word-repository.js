'use strict';

const { Word } = require('../models/word');

const create = async word => Word.create(word);

const getById = async id => Word.findOne({ _id: id, status: 'active' });

const getAll = async () => Word.find({ status: 'active' });

const updateByid = async (id, word) => {
  word.lastDateUpdated = new Date().toISOString();
  return Word.findOneAndUpdate({ _id: id }, { $set: word }, { new: true });
}

const softDeleteById = async (id, word) => {
  word.dateDeleted = new Date().toISOString();
  word.status = 'deleted';

  return Word.findOneAndUpdate({ _id: id }, { $set: word }, { new: true });
}

module.exports = { create, getById, getAll, updateByid, softDeleteById };