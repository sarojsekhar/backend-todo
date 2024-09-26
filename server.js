// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./api/todos');

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware
app.use(cors({
    origin: 'https://new-to-do-list-six.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true,
    optionsSuccessStatus: 200 
}));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://sarojsekhar25:QyiJcOhjFdEdvPPn@mycluster.vr9ru.mongodb.net/todos?retryWrites=true&w=majority&appName=MyCluster')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use(todoRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});