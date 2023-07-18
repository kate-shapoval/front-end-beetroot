const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3200,
        open: true,
        hot: true,
        //host: 'plantshop',
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                // use: [
                //     {
                //         loader: 'file-loader',
                //         options: { outputPath: 'css/', name: '[name].min.css' },
                //     },
                //     'style-loader',
                //     'css-loader',
                //     {
                //         loader: 'sass-loader',
                //         options: {
                //             sourceMap: true,
                //         }
                //     }
                // ]
            },
            // {
            //     test: /\.js$/,
            //     // exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         // options: {
            //         //     presets: ['@babel/preset-env']
            //         // }
            //     }
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ]
}