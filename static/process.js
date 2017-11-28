var images = require("images");
 


for(let i=1;i<=30;i++){
	images('./image/'+i+'.jpg')
	.width(5)
	.height(5)
	.save('./image/'+i+'quality1w5h5.jpg', {               //Save the image to a file,whih quality 50 
        quality : 1                    //保存图片到文件,图片质量为50 
    });	
}


var img = new Image()
img.onload = function(data){
	console.log(data)
}

img.src='//localhost:3002/static/image/30.jpg';
console.log(1)