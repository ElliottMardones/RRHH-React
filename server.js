const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const cors = require('cors');
const session = require('express-session');
const config = require('./config.json');
const MongoStore = require('connect-mongo')(session);
const errorHandler = require('./_helpers/error-handler');
=======

const users = require('./routes/api/users');
>>>>>>> dev-Ivan

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
<<<<<<< HEAD
app.use(session({
    secret: config.secret,
    saveUninitialized: true,
    resave: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60
    })
}));
app.use(cors());
app.use('/user', require('./data/user/user.controller'));
app.use('/question', require('./data/question/question.controller'));
app.use('/test', require('./data/test/test.controller'));
app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;

const server = app.listen(port, function () {
    console.log("Server started on port " + port + ".")
});
=======

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db)
    .then( () => console.log('MongoDB Connected'))
    .catch( (err) => console.log(err) );

// Use Routes
app.use('/api/users',users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port "+port+".") );
>>>>>>> dev-Ivan
