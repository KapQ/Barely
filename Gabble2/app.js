var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var users = require('./routes/users');

var app = express();

app.set('view engine', ejs);

app.use('/users', users);

app.use(expressLayouts);
