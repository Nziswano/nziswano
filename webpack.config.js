const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const vendorPackages = require('./package.json')

const devMode = process.env.NODE_ENV !== 'production'
const NoVendorPackagesInclude = ['font-awesome', 'foundation-sites', '@fortawesome/fontawesome-free-webfots']

const outputDir = path.join(__dirname, 'dist')

const pluginConfig = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  })
]

const moduleConfigBase = [{
    test: /\.(sa|sc|c)ss$/,
    exclude: /node_modules/,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.js$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader'
  },
  {
    test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=100000'
  }
]

const serverConfig = {
  contentBase: outputDir,
  compress: true,
  open: false,
  port: 9000,
  watchContentBase: true,
  historyApiFallback: {
    verbose: true,
    disableDotRule: true
  }
}

const webpackConfig = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: outputDir,
    publicPath: '/assets/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.html', '.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve('src')
    }
  },
  plugins: pluginConfig,
  devServer: serverConfig
}

// Check to see if there are any packages in the vendor package
const vendorPackagesAvailable = Object.keys(vendorPackages.dependencies).filter(name => !NoVendorPackagesInclude.includes(name))

if (vendorPackagesAvailable.length > 0) {
  webpackConfig.entry.vendor = vendorPackagesAvailable
}

webpackConfig.module = {
  rules: moduleConfigBase
}

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins = (webpackConfig.plugins || []).concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
  webpackConfig.devtool = '#source-map'
  webpackConfig.mode = 'production'
} else {
  /* Development */
  webpackConfig.devtool = 'cheap-module-source-map'
  webpackConfig.mode = 'development'
}

module.exports = webpackConfig
