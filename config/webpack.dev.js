const path = require('path')
console.log('__dirname is: ', __dirname);
console.log('path.resolve(__dirname, "../dist") is: ', path.resolve(__dirname, "../dist"));
module.exports = {
  entry: {
    main: ["./src/main.js"]
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    contentBase: "dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  }
}
