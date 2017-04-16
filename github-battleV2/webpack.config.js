 import path from 'path'
 
 module.exports = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
module: {
    rules: [
        {}
    ]
}
 }

