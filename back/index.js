var express = require('express');
var app = express();
var router = require('./routes/api.js');

//CORS Enabled
app.all('/*', (req, res, next) => {
  const origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token, X-Custom');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
  next();
});



app.use('/', router);






app.listen(3000);

module.exports = app;
