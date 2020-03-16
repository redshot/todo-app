const express = require('express');
const mongoose = require('mongoose'); // Parses incoming requests like submitting a form(you can grab the data)
const bodyParser = require('body-parser');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected'))
.catch((err) =>console.log(err));

// Port Number
const port = 3000;

//
const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// Start Server
app.listen(port, () => console.log(`Started server on port ${port}`));
