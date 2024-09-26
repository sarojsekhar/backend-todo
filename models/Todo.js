
const mongoose = require('mongoose');

// Todo schema definition
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    userId: {
        type: Number,
        required: true
    }
});

// Create Todo model from the schema
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;