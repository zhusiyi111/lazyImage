var images = require("images");
 


for(let i=1;i<=30;i++){
	images('./image/'+i+'.jpg')
	.width(3)
	.height(3)
	.save('./image/'+i+'quality100w3h3.jpg', {               //Save the image to a file,whih quality 50 
        quality : 100                    //保存图片到文件,图片质量为50 
    });	
}


