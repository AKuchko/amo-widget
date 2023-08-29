require('dotenv').config()

const { DEV_PORT } = process.env
const publicPath = `https://localhost:${DEV_PORT}`

module.exports = {
  publicPath,
  configureWebpack: {
    output: {
      library: 'widget',
      libraryTarget: 'umd'
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.optimization.delete('splitChunks')
  },
  devServer: {
    https: true,
    port: DEV_PORT,
    client: {
        webSocketURL: {
            hostname: "localhost",
            pathname: "/ws",
            port: 3000,
        },
    },
  }
}