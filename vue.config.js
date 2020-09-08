/* eslint-disable no-param-reassign */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ProgressbarWebpack = require('progress-bar-webpack-plugin') // 打包进度条
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk') // 打包进度条
// eslint-disable-next-line @typescript-eslint/no-var-requires
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV) // 是否是正式环境
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 打包分析

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  /**
 * 打包输出地址相当于webpack.output.publicPath
 * 默认值'/'放在文件夹子目录底下例如：'www.my-app'如果多个子目录'www.my-app/myApp'需要改成子目录地址’myApp‘
 * 相对路径 './'可以放在任意路径
 */
  publicPath: './',
  // 输出文件目录相当于webpack.output.path
  outputDir: 'dist',
  // 静态文件输出文件名 相对于outputDir的目录
  assetsDir: 'assets',
  // 生成静态文件包含hash更好的控制缓存，类似于webpack.output.filenmae: [name].[hash].js
  filenameHashing: true,
  // 配置webpack
  // 通过链式编程修改webpack配置
  chainWebpack: (config) => {
    // 是否将符号链接(symlink)解析到它们的符号链接位置
    config.resolve.symlinks(true)
    // 打包解析
    if (IS_PROD) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ])
    }
  },
  // 通过操作对象修改webpack配置
  configureWebpack: (config) => {
    const plugins = []
    config.resolve.alias = {
      '@': resolve('src')
    }
    if (IS_PROD) {
      // 打包显示进度条
      plugins.push(
        new ProgressbarWebpack({
          format: ` build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
          clear: false
        })
      )
      // 分开打包文件
      config.optimization.splitChunks = {
        cacheGroups: {
          commons: {
            name: 'chunk-commons',
            chunks: 'initial',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 1,
            reuseExistingChunk: true,
            enforce: true
          },
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]iview[\\/]/,
            chunks: 'initial',
            priority: 2,
            reuseExistingChunk: true,
            enforce: true
          },
          iview: {
            name: 'chunk-iview',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 2,
            reuseExistingChunk: true,
            enforce: true
          }
        }

      }
    }
    config.plugins = [...config.plugins, ...plugins]
  },
  /**
     * 配置本地服务，于webpack.devServer配置项一致
     */
  devServer: {
    // eslint-disable-next-line global-require
    before: require('./mock'),
    port: '8888',
    open: true,
    progress: true,
    // 配置eslint警告
    overlay: {
      warnings: true,
      errors: false
    }
  }
}
