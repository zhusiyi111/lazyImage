var express = require('express');
var app = express();

app.use('/static',express.static('static'));


app.listen(3002);