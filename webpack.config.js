const path = require('path'); // import node.js path module
// create config object
const config = {
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: path.join(__dirname, './public/'), // output directory/folder
        filename: 'bundle.js' //output bundled filename
    },
    module: {
        // array of rules to handle different file types
        rules: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                // loaders for css files
                // css-loader gets run first and handles the imports of css files inside jsx files
                // style-loader mounts css into the DOM
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    // sets the file extensions that webpack should resolve
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

//export config object.  es5 syntax used because webpack expects it
module.exports = config;