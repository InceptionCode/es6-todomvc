const { resolve } = require('path')

module.exports = env => ({
  devtool: env.production ? 'none' : 'source-map',
  context: resolve('src'),
  entry: './bootstrap.js',
  output: {
    filename: 'bundle.js'
  }
})
