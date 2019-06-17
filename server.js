const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const config = require('./config.json');
const MongoStore = require('connect-mongo')(session);
const errorHandler = require('./_helpers/error-handler');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: config.secret,
    saveUninitialized: true,
    resave: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60
    })
}));
app.use('/user', require('./data/user/user.controller'));
app.use('/question', require('./data/question/question.controller'));
app.use('/test', require('./data/test/test.controller'));
app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;

const server = app.listen(port, function () {
    console.log("Server started on port " + port + ".")
});