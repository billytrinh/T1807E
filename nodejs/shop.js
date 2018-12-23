var express = require("express");
var app = express();
app.use(express.static('student'));
app.listen(4000);
app.get("/hello",function(req, res){
    res.send("update user");
});