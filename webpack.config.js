var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

//环境变量的配置.dev/online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

//获取html-webpack-plugin参数的方法
var getHtmlConfig = function (name,title) {
    return {
        template: "./src/view/" + name + ".html",
        filename: "view/" + name + ".html",
        title: title,
        inject: true,
        hash: true,
        chunks: ["common", name]
    };
};

//webpack config
var config = {
    entry: {
        "common": ['./src/page/common/index.js'],
        "index": ['./src/page/index/index.js']
    },
    output: {
        path: './dist',//存放路径
        publicPath: './dist',//访问路径
        filename: 'js/[name].js'
    },
    externals: {
        "jquery": "Ubuntu.jquery"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
            { test: /\.string$/, loader: 'string-loader'}
        ]
    },
    resolve: {
        alias: {
            node_modules: __dirname + "/node_modules",
            util: __dirname + "/src/util",
            page: __dirname + "/src/page",
            service: __dirname + "/src/service",
            image: __dirname + "/src/image"
        }
    },
    plugins: [
        /*  new Vendors(),*/
        //独立通用模块
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "js/base.js"  //基于output的path]
        }),
        //css单独打包到文件
        new ExtractTextPlugin('css/[name].css'),
        //html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig("index",'首页'))
    ]
};

if ('dev' === WEBPACK_ENV) {
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}
module.exports = config;