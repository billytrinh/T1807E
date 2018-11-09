var express = require('express');
var app = express();
//Dung de chay cac file tinh html

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s", host, port)
});

var storage = require("node-persist");
storage.initSync({
  dir: "data",
  ttl: false
})

//storage.setItemSync("contact",students)

app.use(express.static('public'));

app.get('/products', function (req, res) {
   res.send('Hello World');
});

app.get('/student', function (req,res) {
  var students = storage.getItemSync("contact");
  res.send(students);
});

