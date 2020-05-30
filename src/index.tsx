
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as StoreProvider} from 'react-redux';
import {createMuiTheme, StylesProvider, ThemeProvider} from '@material-ui/core';

import {App} from './components/App';
import {store} from './store';


// TODO: Abstract this wrappers to avoid repeated code with storybook

ReactDOM.render(
    <StylesProvider injectFirst>
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
            <StoreProvider store={store}>
                <App/>
            </StoreProvider>
        </ThemeProvider>
    </StylesProvider>,
    document.getElementById('root')
);
