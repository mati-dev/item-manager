
import path from 'path';
import {Configuration, HashedModuleIdsPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';


const config: Configuration = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
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
        }, {
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development'
                    }
                },
                'css-loader?modules',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/index.ejs'
        }),
        new HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ],
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
