
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const $ = require('jquery');

const toBase64 = require('./toBase64')


function processHtml(html){

	const dom = new JSDOM(html);
	const window = dom.window;
	const document = window.document;

	const $ = require('jquery')(window);
	
	return new Promise((resolve,reject)=>{
		var promiseArr = [];
		// 替换src为data-src
		$('img').each(async function(){

			promiseArr.push(new Promise(async (resolve,reject)=>{
				let _this = $(this);
				let src = $(this).attr('src')
				_this.attr('data-src',src);
				let imgName = src.match(/\/([\w]+\.jpg)$/)[1];
				let replaceName = imgName.match(/([\w]+)\.jpg/)[1] + 'quality100w3h3.jpg';
				let replaceImage = src.replace(imgName,replaceName);

				let base64 = await toBase64(replaceName);

				_this.attr('src',base64);
				resolve();
			}))
			

		})

		Promise.all(promiseArr).then(function(){
			resolve('<!DOCTYPE html>' + $('html').html());
		})		
	})


}


module.exports = processHtml