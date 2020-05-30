
import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/App';
import {withStylesProvider, withThemeProvider, withStoreProvider} from './contextProviders';


ReactDOM.render(
    withStylesProvider(
        withThemeProvider(
            withStoreProvider(
                <App/>
            )
        )
    ),
    document.getElementById('root')
);
