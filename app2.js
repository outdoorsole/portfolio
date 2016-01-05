var express = require('express');
var app = express();

// put in a route, callback with the arguments
//req, resp, next
app.get('/', function(req, res, next) {
  res.send('Hello World')
})

app.listen(3000)

console.log('The server is running at localhost:3000')
