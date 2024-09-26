// api/todos.js
const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// Add a new todo
router.post('/api/todos', async (req, res) => {
    const { text, completed, userId } = req.body;
    try {
        const newTodo = new Todo({ text, completed, userId });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ error: 'Error creating todo' });
    }
});

// Get all todos
router.get('/api/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching todos' });
    }
});

// Update a todo
router.put('/api/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ error: 'Error updating todo' });
    }
});

// Delete a todo
router.delete('/api/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Error deleting todo' });
    }
});

module.exports = router;