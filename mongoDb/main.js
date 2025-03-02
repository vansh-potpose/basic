import express from "express";
import mongoose from "mongoose";
import { Todo } from './models/Todo.js';


let a = await mongoose.connect("mongodb://localhost:27017/sigma")
const app = express()
const port = 3002

app.get('/', (req, res) => {
    const todo=new Todo({name:"vansh",task:"kya hua",isDone:true})
    todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})