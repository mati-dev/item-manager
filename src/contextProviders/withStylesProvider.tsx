
import React, {ReactElement} from 'react';
import {StylesProvider} from '@material-ui/core';


export const withStylesProvider = (component: ReactElement) => {
    return (
        <StylesProvider injectFirst>
            {component}
        </StylesProvider>
    );
};
