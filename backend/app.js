var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cardRouter = require('./routes/card');
var cardAccessRouter = require('./routes/card_access');
var transactionsRouter = require('./routes/transactions');
var accesslistRouter = require('./routes/accesslist');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/card', cardRouter);
app.use('/transactions', transactionsRouter);
app.use('/card_access', cardAccessRouter);
app.use('/accesslist', accesslistRouter);

module.exports = app;
