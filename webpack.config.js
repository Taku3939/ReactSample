var path = require('path');

const dist = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",
  output:{
      path:dist,
      filename:'main.jsx'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    watchContentBase: true
  }
};