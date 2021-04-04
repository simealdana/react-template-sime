const path = require("path");
const mode = process.env.ENV || 'development';
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const  FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports={
    mode,
    entry: path.resolve(__dirname,"src","index.tsx"),
    target:'web',
    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname,"dist",),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js','jsx'],
    },
    module:{
        rules:[
            {
                test:/\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.ico$/,
                loader:'file-loader',
                options:{
                    name:'[name].[ext]',
                }
            },
            {
                test:/\.(png|jpg|jpge|svg|gif)$/,
                loader:'file-loader',
                options:{
                    name:'[name].[ext]',
                    outputPath:'images',
                    publicPath:'/images'
                }
            },
            {
                test:/\.(s[ac]ss|css)$/,
                use:'style-loader',
            },
        ]
    },
    optimization:{
        splitChunks:{
            chunks:'async'
        }
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname,"public","index.html"),
            inject:false,
            minify:false,
            scriptLoading:'defer'
        }),
        new FriendlyErrorsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:3000,
        contentBase: path.resolve(__dirname,"src"),
        
    }
}