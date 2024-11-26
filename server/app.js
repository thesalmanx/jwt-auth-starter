const express = require('express');
const cors = require('cors');
const path = require('path');

/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// Create the Express application
var app = express();

// Configures the database and opens a global connection that can be used in any module with `mongoose.connection`
require('./config/database');

// Must first load the models
require('./models/user');
require('./models/todo');

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(require('./routes'));


/**
 * -------------- SERVER ----------------
 */

app.listen(8080);
