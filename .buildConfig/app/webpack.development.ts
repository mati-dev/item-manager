
import {Configuration, HotModuleReplacementPlugin} from 'webpack';
import path from 'path';

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
            styleRule('development')
        ]
    },
    plugins: [
        ...mainConfig.plugins,
        new HotModuleReplacementPlugin(),
        htmlPlugin
    ],

    devServer: {
        contentBase: path.join(__dirname, '../public'),
        hot: true,
        open: true
    },
    optimization: undefined
};

export default config;
