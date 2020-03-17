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

const todos = require('./routes/api/todos');

// Port Number
const port = 3000;

const app = express();

// Template Engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Body Parser Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  // res.send('Home Endpoint');
  res.render('index');
});
app.use('/api/todos', todos)

// Start Server
app.listen(port, () => console.log(`Started server on port ${port}`));
