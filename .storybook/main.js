

// Storyshots seems to have some kind of issue with main.ts, so we have been forced to use main.js
module.exports = {
    presets: ['@storybook/preset-typescript'],
    stories: ['../src/**/?(*.)stories.[jt]s?(x)']
};
