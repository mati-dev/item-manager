
import defaultConfig from '../webpack.config';
import {styleRule} from '../rules';


export default {
    addons: [
        // There seems to be an issue with addon-viewport and react 16.13.1. It throws a warning about updating during
        // an existing transition, but everything seems to be working as expected. I'm going to maintain this addon
        // as viewports are quite useful to use on development and if something breaks because of this, it will only
        // happen below the context of storybook.
        //
        // https://github.com/storybookjs/storybook/issues/10204 - Here they talk about this issue, both with vue
        // and react
        '@storybook/addon-viewport/register',
        '@storybook/addon-actions/register'
    ],
    presets: ['@storybook/preset-typescript', '@storybook/preset-scss'],
    stories: ['../../src/**/?(*.)stories.[jt]s?(x)'],
    webpackFinal: config => {
        return {
            ...config,
            module: {...config.module, rules: [...defaultConfig.module.rules, styleRule('storybook')]},
            plugins: [
                ...config.plugins,
                ...defaultConfig.plugins
            ]
        };
    }
};
