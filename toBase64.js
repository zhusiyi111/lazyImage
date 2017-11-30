const image2base64 = require('image-to-base64');

const foldPath = './static/image/';

function convert(imgName){

	let path = foldPath + imgName;

	return new Promise((resolve,reject)=>{
		image2base64(path)
		.then(
		    (response) => {
		        resolve('data:image/jpeg;base64,'+response); //cGF0aC90by9maWxlLmpwZw==
		    }
		)
		.catch(
		    (error) => {
		        reject(error); //Exepection error....
		    }
		)		
	})

}

module.exports = convert;
