
import {addDecorator} from '@storybook/react';

import {stylesProviderDecorator, themeProvider} from './decorators';

import 'normalize.css';
import 'typeface-roboto';
import '../src/styles/_scaffolding.scss';


addDecorator(stylesProviderDecorator);
addDecorator(themeProvider);
