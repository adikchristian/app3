require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var categoryRouter = require('./src/routes/categories');
var productRouter = require('./src/routes/products');
var refreshTokenRouter = require('./src/routes/refreshToken');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/refresh-token', refreshTokenRouter);

module.exports = app;
