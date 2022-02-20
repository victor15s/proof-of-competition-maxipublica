'use strict';

const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  allow: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: 'active',
    enum: ['active', 'delete'],
  },
  dateCreated: {
    type: Date,
    default: new Date().toISOString(),
  },
  lastDateUpdated: {
    type: Date,
    default: new Date().toISOString(),
  },
  dateDeleted: {
    type: Date,
    default: new Date().toISOString(),
  },
},
  {
    versionKey: false,
});

WordSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.dateDeleted;
  delete obj.status;

  return obj;
}

const Word = mongoose.model('Word', WordSchema);

module.exports = { Word };