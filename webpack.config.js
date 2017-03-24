let path = require('path');

// You can view the docs for Webpack but basically, entry is 
// the file to start with and output is where you want it to go.
// There is a lot more you can do with this.
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}