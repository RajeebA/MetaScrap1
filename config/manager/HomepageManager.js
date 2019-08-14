
const http = require('http');
ogs = require('open-graph-scraper');
function posturl(data,cb) {
console.log(data)
    ogs({url:data.url, 'timeout': 8000}, function(err, results) { 
        // res.setHeader('Content-Type', 'application/json');
        // res.send(JSON.stringify(results, null, 3));
        console.log(results)
        
        cb(null,results);
    }
);
 
}





module.exports = {

    posturl: posturl
};

