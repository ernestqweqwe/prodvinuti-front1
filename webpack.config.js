const path = require('path');

module.exports = {
    // entry: './src/index.js' забись равносильна снизу
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    }

}