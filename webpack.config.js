const path = require('path');
const TerserPlugin = require("terser-webpack-plugin"); // minimisation js
const MinicssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname,"./dist"),
        publicPath: "" // use current url of ur server pre expl https/lien
    },
    mode :'none',
    module: {
        rules: [
            {
                test: /\.(PNG|jpg)$/,
                use : [
                    'file-loader'
                ]
            },
            {
                test:/\.css$/,
                use: [
                    MinicssExtractPlugin.loader,'css-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    MinicssExtractPlugin.loader,'css-loader','sass-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude:'/node_modules/',
                use:{
                    loader: "babel-loader",
                    options : {
                        presets : ['@babel/env'], // for read es6 and es5 ...
                        plugins : ['transform-class-properties']
                    }

                }
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new CleanWebpackPlugin(),
        new MinicssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new HtmlWebpackPlugin(),

    ]
}
