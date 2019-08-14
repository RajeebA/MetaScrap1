// 'use strict';

// const http = require('http'),
//       express = require('express'),
//       ogs = require('open-graph-scraper');

// const app = express();

// app.get('/', function(req, res){
// 	ogs({url:'http://ogp.me/', 'timeout': 8000}, function(err, results) { 
// 			res.setHeader('Content-Type', 'application/json');
//             res.send(JSON.stringify(results, null, 3));
//             console.log(results)
// 		}
// 	);
// });
// app.listen(3000);

"use strict";
var express=require("./config/express");

var app=express();


var server=app.listen(3000,function()
{
	var port=server.address().port;
	console.log("port 3000 running !!!!!");
	
});

module.export={
	app:app,
	server:server
};