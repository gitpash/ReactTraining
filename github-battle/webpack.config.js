// подгружаем хтмл-вебпак-плагин
let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
   template: __dirname + '/app/index.html', // создаём экземпляр объекта и задаём путь
   filename: 'index.html',                  // имя
   inject: 'body'                           // и куда инжектнуть
});


// задаём точку входа
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {                     // для выхода задаём путь и имя файла
    path: __dirname + '/dist', // __dirmane та директория, где выполняется скрипт(github-battle)
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"} // все файлы с расширением .js кроме папки node_modules используя загрузчик babel
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
