var express = require('express');
var app = express();
//Dung de chay cac file tinh html
app.use(express.static('public'));

app.get('/products', function (req, res) {
   res.send('Hello World');
});

app.get('/student', function (req,res) {
  var students = [
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
      {
      name: "Fernando Torres",
      phone: "0912548956",
      address: "Madrid - Spain",
      },
      {
      name: "Fernando Torres",
      phone: "0912548956",
      address: "Madrid - Spain",
      },
      {
      name: "Fernando Torres",
      phone: "0912548956",
      address: "Madrid - Spain",
      },
      {
      name: "Fernando Torres",
      phone: "0912548956",
      address: "Madrid - Spain",
      },
      {
      name: "Fernando Torres",
      phone: "0912548956",
      address: "Madrid - Spain",
      },
      {
      name: "Fernando Torres",
      phone: "0912548956",
      address: "Madrid - Spain",
      },
      {
      name: "Fernando Torres",
      phone: "0912548956",
      address: "Madrid - Spain",
    },
  ];
  res.send(students);
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s", host, port)
});