var express = require('express');
var app = express();

var server = app.listen(3000, function () {
  console.log("Ung dung Node.js dang hoat dong");
});


// Dung de chay cac file tinh html
app.use(express.static('public'));
// ---- 
app.get("/xxx",function(req,res){
	res.send("heelo");
});
app.get('/products', function (req, res) {
	var products = {
	    status: 1,
	    message: "Success!",
	    data: [
	        {
	            image: "http://smsentertainment.club/images/img1.jpg",
	            name: "Reebok Track Jacket 1",
	            price: "110$"
	        },
	        {
	            image: "http://smsentertainment.club/images/img2.jpg",
	            name: "Reebok Track Jacket 2",
	            price: "210$"
	        }
	    ]
	};
   res.send(products);
});

app.get("/contacts",function(req,res){
	var contacts = [
	{
		name: "Kim Jong Un",
		phone: "0916548623",
		address: "Korea Republic",
	},
	{
		name: "Trump Donal",
		phone: "0916103629",
		address: "United States",
	},
	{
		name: "Cristiano Ronaldo",
		phone: "0984125963",
		address: "Portugal",
	},
	{
		name: "Marvel Thanos",
		phone: "0923487651",
		address: "Titan planet",
	},
	{
		name: "Marvel Loki",
		phone: "0949324158",
		address: "Asgard",
	},
	{
		name: "Marvel Thor",
		phone: "0974125952",
		address: "Asgard",
	},
	{
		name: "Marvel Hulk",
		phone: "0903259657",
		address: "New Mexico - US",
	},
	{
		name: "Marvel Captain",
		phone: "0964159623",
		address: "Comming soon",
	},
	{
		name: "Marvel IronMan",
		phone: "0931458965",
		address: "NY - US",
	},
	{
		name: "Marvel Captain",
		phone: "0969854198",
		address: "NY - US",
	},
	{
		name: "Cong Phuong",
		phone: "0922365874",
		address: "Nghe An",
	},
	{
		name: "Hoang Trung Hai",
		phone: "0912568596",
		address: "Thai Binh",
	},
	{
		name: "Vu Duc Dam",
		phone: "0984216985",
		address: "Hai Duong",
	},
	{
		name: "Nguyen Thi Kim Ngan",
		phone: "0912987581",
		address: "Thai Binh",
	},
	{
		name: "Nguyen Phu Trong",
		phone: "0911958745",
		address: "Ha Noi",
	},
	{
		name: "Wayne Rooney",
		phone: "0962548963",
		address: "London - England",
	},
	{
		name: "Fernando Torres",
		phone: "0912548956",
		address: "Madrid - Spain",
	},
	
];
	
	res.send(contacts);
});
