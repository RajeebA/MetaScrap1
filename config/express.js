 
    var express=require("express"),
    bodyParser=require("body-parser")
	//methodOverride = require("method-override");
	// path=require("path");
	
	module.exports=function(){
		
		var app=express();
		app.use(bodyParser.urlencoded({
			extended:true
		}));
		
		app.use(bodyParser.json());

		//app.use(methodOverride());

		app.use(function(req, res, next) {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			next();
		});

		app.use(express.static("./public"));
		require("../route/homepage.server.route.js")(app);
	
			
		return app;
	};

		

		

		

		