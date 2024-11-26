const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    id: String,
    text: String,
    username: String
});

mongoose.model('Todo', TodoSchema);