const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailSchema = new Schema({
  sentAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Email', emailSchema);
