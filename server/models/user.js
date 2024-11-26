const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
    googleId: String // Add this line
});

mongoose.model('User', UserSchema);
