
const path  = require('path');
const webpack  = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode:'development',
    entry: {
        app: "./main.js"    // 入口 js
    },
    output: {   //打包输出目录
        path: path.join(__dirname, '../dist'), //打包输出路径
        filename: '[name].js'     //打包输出文件名字 name 对应的是 entry 里面的 app
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new HtmlWebpackPlugin({
            filename: 'index.html', //html文件名
            template: 'index.html', //制定文件模版
            inject: true     //是否引用打包好的js
        })
    ],
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',  //设置别名，不然使用 import  识别不了 vue
            '@': path.join(__dirname, 'src')
        }
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude:/node_modules/, //排除 node_modules 文件夹
                options: {
                    extractCSS: true // 提取.vue文件中的style作为单个css文件
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/
            },
            {
                test: '/\.js$/', //匹配js文件
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets: ['env'] //作为参数传入 babel-loader，babel-loader会根据浏览器的不同，自动编译成 es5 或者es6 语法
                }
            }
        ]
    },
};
