var express = require('express');
var bodyParser = require('body-parser');

var tax = require('./routes/tax');

var port = 3001;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', tax);

app.listen(process.env.PORT || port, () => {
   console.log('Server started on port: ' + port);
});

module.exports = app;
