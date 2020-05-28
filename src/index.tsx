
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as StoreProvider} from 'react-redux';
import {createMuiTheme, StylesProvider, ThemeProvider} from '@material-ui/core';

import {App} from './components/App';
import {store} from './store';


ReactDOM.render(
    <StylesProvider injectFirst>
        <ThemeProvider theme={createMuiTheme({
            palette: {
                primary: {
                    main: '#2bbd7e'
                }
            }
        })}>
            <StoreProvider store={store}>
                <App/>
            </StoreProvider>
        </ThemeProvider>
    </StylesProvider>,
    document.getElementById('root')
);
