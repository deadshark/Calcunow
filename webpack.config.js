const path = require('path'); // import node.js path module
// create config object
const config = {
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: path.join(__dirname, './public'), // output directory/folder
        filename: 'bundle.js' //output bundled filename
    },
    module: {
        rules: [ // array of rules to handle different file types
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            }
        ]
    }
};

//export config object.  es5 syntax used because webpack expects it
module.exports = config;