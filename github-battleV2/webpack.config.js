//  import path from 'path'
let HtmlWebpackPlugin = require ('html-webpack-plugin')

 module.exports = {
    entry: './app/index.jsx',
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js'
    },
module: {
    rules: [
        { test: /\.(jsx)$/, use: 'babel-loader' },
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
    ]
},
  plugins: [
    new HtmlWebpackPlugin({
        template: 'app/index.html'
  })]
  
}

