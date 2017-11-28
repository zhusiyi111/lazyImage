const path = require('path');
const glob = require('glob');


var moduleEntry = glob.sync('./src/page/*.js');

var entry = {}

for(let i=0;i<moduleEntry.length;i++){
	let path = moduleEntry[i];
	let name = path.match(/\/([a-zA-Z]+)\.js$/)[1];
	entry[name] = path;
}


module.exports = {
    entry: entry,
    output: {           //打包输出
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {       //模块配置
        rules: [
        	{        //模块规则
                test: /\.js$/
            }
        ]
    },
    devtool: '#source-map'
}
