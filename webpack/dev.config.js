'use strict';

var path = require('path'),
    CACHE_PATH = path.join(__dirname, '../static/cache'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config');

var _host = "0.0.0.0",
    _port = 9090,
    _localPublicPath = 'http://' + _host + ':' + _port + '/';
 
config.entry.app.unshift('webpack/hot/only-dev-server');
config.entry.app.unshift('webpack-dev-server/client?' + _localPublicPath);
config.entry.app.unshift('react-hot-loader/patch');


config.output.publicPath = _localPublicPath;
config.module.loaders[0].loaders.unshift('ts-loader?configFileName=tsconfig.json');
config.module.loaders[0].loaders.unshift('babel?cacheDirectory=' + CACHE_PATH);
config.module.loaders[1].loader = 'style-loader!css-loader?sourceMap!postcss-loader!sass-loader?sourceMap=true';
config.devtool = 'cheap-module-eval-source-map';
config.plugins.push(new webpack.HotModuleReplacementPlugin());
 

new WebpackDevServer(webpack(config), {
        hot: true,
        inline: true,
        compress: true,
        stats: {
        chunks: false,
        children: false,
        colors: true,
    },
    proxy: {
        '*.json': "http://localhost:8082"
    },
    historyApiFallback: true,
}).listen(_port, _host, function() {
    console.info('==> 🚧  Webpack development server running - %s', _localPublicPath);
});