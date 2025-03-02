import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  name: String,
  task: String,
  isDone: Boolean
});

export const Todo = mongoose.model('Todo', todoSchema);
