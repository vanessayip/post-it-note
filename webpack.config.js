var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: `${SRC_DIR}`,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader?name=/public/icons/[name].[ext]"
      }
    ]
  },
  // Since Webpack only understands JavaScript, we need to
  // add a plugin to tell it how to handle html files.   
  plugins: [
    // Configure HtmlPlugin to use our own index.html file
    // as a template.
    new HtmlPlugin({
      template: 'client/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
