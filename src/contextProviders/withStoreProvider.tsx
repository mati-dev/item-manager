
import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';

import {store} from '../store';


export const withStoreProvider = (component: ReactElement) => {
    return (
        <Provider store={store}>
            {component}
        </Provider>
    );
};
