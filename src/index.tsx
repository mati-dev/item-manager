
import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'typeface-roboto';
import './styles/_scaffolding.scss';

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
