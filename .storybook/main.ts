
import defaultConfig from '../.buildConfig/webpack.development';


export default {
    addons: ['@storybook/addon-viewport/register', '@storybook/addon-actions/register'],
    presets: ['@storybook/preset-typescript', '@storybook/preset-scss'],
    stories: ['../src/**/?(*.)stories.[jt]s?(x)'],
    webpackFinal: config => {
        return {
            ...config,
            module: { ...config.module, rules: defaultConfig.module.rules },
            plugins: [...config.plugins, ...defaultConfig.plugins]
        };
    }
};
