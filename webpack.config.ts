
import path from 'path';
import {Configuration, HashedModuleIdsPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const config: Configuration = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader'
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Item Manager',
            template: 'src/index.ejs'
        }),
        new HashedModuleIdsPlugin()
    ],
    optimization: {
        // TODO: Need to analyze produced chunks after the app is done
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};

export default config;
