
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shiftSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  isShiftMarginEnabled: {
    type: Boolean,
    default: false
  },
  startMarginInMinutes: {
    type: Number,
    default: 0
  },
  endMarginInMinutes: {
    type: String,
    default: 0
  },
  createdBy: {
    type: String
  },
  createdFor: {
    type: Schema.Types.ObjectId,
    ref: 'Organization'
  }
});

export const Shift = mongoose.model('Shift', shiftSchema);