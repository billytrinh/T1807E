var express = require('express');
var app = express();
// Dung de chay cac file tinh html
app.use(express.static('public'));
// ---- 
app.get('/', function (req, res) {
   res.send('Hello World');
});

var server = app.listen(3000, function () {
  console.log("Ung dung Node.js dang hoat dong");
});