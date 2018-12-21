 var express = require('express');
var app = express();
var storage= require("node-persist");
storage.initSync({
	dir: "data",
	ttl: false
});
storage.setItemSync

//dung de chay cac file tinh html
app.use(express.static('public'));
// ---
app.get('/ contact', function (req, res) {
	var contact=[
	            {
					name:"Nguyen van a",

					telephone_number:12345
				},
				{
					name:"Nguyen van b",
					telephone_number:6789
				},
				{
					name:"Nguyen van c",
					telephone_number:913246
				},
				{
					name:"Nguyen van d",
					telephone_number:298743
				},
				{
					name:"Nguyen van e",
					telephone_number:324783
				},
				{
					name:"Nguyen van f",
					telephone_number:28364
				},


	]

	

   res.send('contact');
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s")
});