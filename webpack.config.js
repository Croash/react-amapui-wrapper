const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');//引入html-webpack-plugin

const loaders = [
  {
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ]
  },
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: "babel-loader"
  },
  {
    test: /\.(tsx|ts)?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  },
  {
    test: /\.(js|jsx|tsx|ts)$/,
    use: ["source-map-loader"],
    enforce: "pre"
  },
  {
    test:/\.(png|jpg|gif)$/,
    use:[{
      loader:'url-loader',
      options:{
        outputPath:'images/',//输出到images文件夹
        limit:500  //是把小于500B的文件打成Base64的格式，写入JS
      }
    }]
  }
]

const plugins =  [// 对应的插件
    new HtmlWebpackPlugin({ //配置
        filename: 'index.html',//输出文件名
        template: './index.html',//以当前目录下的index.html文件为模板生成dist/index.html文件
    }),
  ]

module.exports = {
  mode: 'production',

  devtool: "inline-source-map", 
  devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port:8988,
    // hot: true
  },
  entry: {
    app: "./src/index.ts", //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
    vendor: [
      'react',
      'react-dom',
    ]
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: loaders
  },
  plugins,
  output: {
    filename: "[name].bundle.js",//输出文件名，[name]表示入口文件js名
    path: path.join(__dirname, "dist")//输出文件路径
  }
}