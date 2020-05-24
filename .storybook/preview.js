
import {addDecorator} from '@storybook/react';

import {stylesProviderDecorator} from "./decorators";

import 'normalize.css';
import 'typeface-roboto';
import '../src/styles/_scaffolding.scss';


addDecorator(stylesProviderDecorator);
