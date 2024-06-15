const mongoose = require('mongoose')

const Schema = mongoose.Schema

const codeSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
    unique: true,
  },
  code: {
    type: String, required: true
  },
  createdAt: { type: Date, default: Date.now(), expires: 60 }
})

module.exports = mongoose.model('sixDigitCode', codeSchema)