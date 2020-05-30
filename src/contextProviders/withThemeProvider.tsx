
import React, {ReactElement} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';


export const withThemeProvider = (component: ReactElement) => {
    return (
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
            {component}
        </ThemeProvider>
    );
};
