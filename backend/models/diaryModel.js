mongoose = require('mongoose')

const Schema = mongoose.Schema

const diarySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  text: {
    type: String,
    required: true,
    minLength: 1,
  },
  upvotes: {
    type: Array,
    defaultValue: [],
  },
  media: {
    type: String,
    defaultValue: ""
  },
  privacy: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

module.exports = mongoose.model("Diary", diarySchema)

