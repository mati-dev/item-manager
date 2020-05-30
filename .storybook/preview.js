

import 'normalize.css';
import 'typeface-roboto';
import '../src/styles/_scaffolding.scss';

import {addDecorator} from '@storybook/react';

import {withStylesProvider, withThemeProvider} from "../src/contextProviders";


addDecorator(story => withStylesProvider(story()));
addDecorator(story => withThemeProvider(story()));
