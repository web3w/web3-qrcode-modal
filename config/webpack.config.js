const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

const path = require('path')


module.exports = {
    target: 'web',
    watchOptions: {
        aggregateTimeout: 600,
        ignored: ['**/node_modules']
    },
    optimization: {
        minimize: true,
    },
    mode: 'development',
    entry: ["./src/index.ts"],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|eot|ttf|svg|woff|woff2)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: false,
                        name: '[name].[ext]'
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist')
        },
        compress: true,
        port: 9002
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.json'],
        fallback: {}
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer']
        }),
        new HtmlWebpackPlugin({
            title: 'Wallet SDK',
            template: './page/index.html'
        }),
        new CopyWebpackPlugin({patterns: [{from: './page/js', to: './js'}]})
    ]

}
