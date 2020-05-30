
import React from 'react';
import {createMuiTheme, StylesProvider, ThemeProvider} from '@material-ui/core';


export const stylesProviderDecorator = story => <StylesProvider injectFirst>{story()}</StylesProvider>;
export const themeProvider = story =>
    <ThemeProvider theme={createMuiTheme({
        palette: {
            primary: {
                main: '#2bbd7e'
            },
            secondary: {
                main: '#f5f5f6'
            }
        }
    })}>
        {story()}
    </ThemeProvider>;
