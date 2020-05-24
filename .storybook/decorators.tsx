
import React from 'react';
import {StylesProvider} from '@material-ui/core';


export const stylesProviderDecorator = fn => <StylesProvider injectFirst>{fn()}</StylesProvider>;
