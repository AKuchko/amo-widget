require('dotenv').config()

const { WEBPACK_PORT } = process.env
const publicPath = `https://localhost:${WEBPACK_PORT}`

module.exports = {
    publicPath,
    configureWebpack: {
        output: {
            library: 'amo-widget',
            libraryTarget: 'umd',
        },
    },
    chainWebpack: (config) => {
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.optimization.delete('splitChunks')
    },
    devServer: {
        https: true,
        port: WEBPACK_PORT,
        // publicPath,
    }
}