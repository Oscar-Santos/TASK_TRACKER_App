const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({

    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      required: true,
    },
    status: {
      type: String,
      enum: ['To do', 'in Progress', 'Completed'],
      required: true,
    },
    user_id: {
      type: String,
      required: true
    }
  }, {timestamps: true });
  

  const Task = mongoose.model('Task', taskSchema);
  
  module.exports = Task;