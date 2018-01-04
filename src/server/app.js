const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const dbConfig = require('./db.js');
const mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

// Configuring Passport
const passport = require('passport');
const expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;