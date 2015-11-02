var express = require('express');

var router = require('./router');

var app = express();

var porta = require('./config/express').get('port');


app.use(router);

app.listen(porta);