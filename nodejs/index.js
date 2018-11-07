var express = require('express');
var app = express();

//dung de chay cac file tinh html
//----------------------------------
app.use(express.static('public'));
//----------------------------------

app.get('/', function (req, res) {
   res.send('Hello World');
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s", host, port)
});