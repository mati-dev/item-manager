
import React, {Component, ReactElement} from 'react';
import {StylesProvider} from '@material-ui/core';


export class App extends Component {

    public render(): ReactElement {

        return (
            <StylesProvider injectFirst>
                <div>Hey <span>apple!</span></div>
            </StylesProvider>

    );

    }

}
