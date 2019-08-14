"use strict";
module.exports=function(app){

var homepage=require("../controller/homepage.server.controller");


app.post("/api/homepage/posturl",homepage.posturl);


app.all('/*', function(req, res) { 
    res.sendfile('public/index.html'); 
});  

};

