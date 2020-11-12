const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

//enternal modules
const router = require('./server/Routes/index');


//app inits
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//router inits
router(app);

module.exports = app;