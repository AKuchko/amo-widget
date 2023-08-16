require('dotenv').config()
const path = require('path')
const { WEBPACK_PORT } = process.env
const publicPath = `https://localhost:${WEBPACK_PORT}`

module.exports = {
    publicPath,
    configureWebpack: {
        output: {
            library: 'amo-widget',
            libraryTarget: 'umd',
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
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
    },
}