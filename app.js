var path = require('path');
var express = require('express');
var app = express();

app.get('/home', function(req, res) {
  res.end('Hello World!');
});

app.listen(3000);
app.use(express.static(path.join(__dirname, 'public')));
