
import defaultConfig from '../webpack.development';


export default {
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
