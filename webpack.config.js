// webpack.config.js

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
    entry: [
        path.resolve(__dirname, 'src', 'index.js'),
        path.resolve(__dirname, 'src', 'index.scss')
    ],
    output: {
        path: path.join(__dirname, 'dist'), // bundled file in dist/
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // applies to js files
                use: ['babel-loader'], // transpiles your js
                exclude: /node_modules/, // don't transpile node modules
            },
            {
                test: /\.s?[ac]ss$/, // applies to css/scss/sass files
                use: [
                    MiniCssExtractPlugin.loader, // create bundled css file
                    {
                        loader: 'css-loader', // resolves @import statements
                        options: { url: false } // don't resolve url() statements
                    },
                    'sass-loader', // compiles sass to css
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'index.html', to: 'index.html' },
                { from: 'assets', to: 'assets' },
                { from: 'favicon.png', to: 'favicon.png' }
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
        hot: true,
        open: true,
        historyApiFallback: true,
        devMiddleware: {
            writeToDisk: false
        }
    }
};

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.devtool = 'source-map';
        config.output.publicPath = '/Ocrean_8d_2025/';
    } else {
        config.devtool = 'eval-source-map';
    }

    return config;
};