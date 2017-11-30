var express = require('express');
var app = express();
var fs = require('fs');
var processImgTag = require('./processImgTag');

app.use('/static',express.static('static'));



app.get('/html/:page',function(req,res,next){


	let page = req.params.page;
 	fs.readFile("./static/page/"+page,function(err,data){
        // body
        if(err){
            console.log(err);
            //404：NOT FOUND
            res.writeHead(404,{"Content-Type":"text/html"});
        }
        else{
            //200：OK
            res.writeHead(200,{"Content-Type":"text/html"});
            let html = data.toString();
            processImgTag(html).then(function(result){
            	res.end(result);
            });
            
        }
    });
})


app.listen(3002);