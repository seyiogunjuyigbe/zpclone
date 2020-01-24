
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const departmentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  employees: [{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }],
  dateCreated: {
    type: Date,
    required: true
  }
});

export const Department = mongoose.model('Department', departmentSchema)