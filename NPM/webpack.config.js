// для работы нужен webpack-plugin, который заменяет исходный index.html на исполняемый браузером
let HtmlWebpackPlugin = require('html-webpack-plugin')
// создаём экземпляр вебпакплагина и указываем 3 вещи:
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html', // 1ая это шаблон, как итог будет выглядеть
  filename: 'index.html',                  // 2ая это имя создаваемого файла
  inject: 'body'                          // 3яя это место инжекции скрипта(body or head) и отсылка к index_bundle.js
})

// точка входа index.js
module.exports = {
   entry: [
     './app/index.js'
   ],
   // загрузчик babel для js файлов
   module: {
     loaders: [
       {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
     ]
   },
   // характеристики выходного: файла имя и путь
   output: {
     filename: "index_bundle.js",
     path: __dirname + '/dist' //__dirname отсылает к директории где выполняется скрипт
   },
   plugins: [HtmlWebpackPluginConfig]
}
