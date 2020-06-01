
import {Configuration} from 'webpack';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import mainConfig from '../webpack.config';
import {styleRule} from '../rules';
import {htmlPlugin} from '../plugins';


const config: Configuration = {
    ...mainConfig,

    mode: 'development',
    devtool: 'source-map',
    module: {
        ...mainConfig.module,
        rules: [
            ...mainConfig.module.rules,
            styleRule('production')
        ]
    },
    plugins: [
        ...mainConfig.plugins,
        htmlPlugin
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
