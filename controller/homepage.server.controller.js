 "use strict";
var config=require("../config/manager/HomepageManager");




		exports.posturl=function(req,res){



			var data=req.body;
		
			config.posturl(data,function(err,result)
			{
	
				res.send(result);
				
			});
			
			
			}
	



