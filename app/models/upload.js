'use strict';

const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
  // comment: {
  //   type: String,
  //   required: false
  // }
}, {
  timestamps: true
})

// uploadSchema.virtual('length').get(function length () {
//   return this.text.length
// })

const Upload = mongoose.model('Upload', uploadSchema)

module.exports = Upload
