var express = require("express");
var app=express();
var path = require("path");

app.use(express.static(path.join(__dirname,'public')));

app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8075);
console.log("Server is Running at port 8075");