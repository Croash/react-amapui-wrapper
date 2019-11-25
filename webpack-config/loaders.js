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

module.exports = loaders