const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// !!!!! EXAMPLE CODE !!!!! //
const examples = require('./routes/api/examples');
// ------------------------ //

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db)
    .then( () => console.log('MongoDB Connected'))
    .catch( (err) => console.log(err) );

// Use Routes
// !!!!! EXAMPLE CODE !!!!! //
app.use('/api/examples',examples);
// ------------------------ //

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port "+port+".") );