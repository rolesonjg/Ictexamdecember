const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
// require('dotenv').config()
const cors = require('cors')
require('./config/db')
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Define Todo schema
const todoSchema = new mongoose.Schema({
    description: String,
    status: String,
});

const Todo = mongoose.model('Todo', todoSchema);



//api endpoints
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/todos', async (req, res) => {
    try {
        const { description, status } = req.body;
        const newTodo = new Todo({ description, status });
        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        res.json(deletedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});








app.listen(4000, () => {
    console.log(`server is running on 4000`)
})

