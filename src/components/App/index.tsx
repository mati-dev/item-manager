
import 'normalize.css';
import 'typeface-roboto';
import '../../styles/_scaffolding.scss';

import React, {Component, ReactElement} from 'react';
import {StylesProvider, CircularProgress} from '@material-ui/core';

import {Header} from '../Header';

import styles from './styles.scss';


interface AppState {
    ready?: boolean;
}

export class App extends Component<{}, AppState> {

    public constructor(props: {}) {
        super(props);

        this.state = {};

    }

    public render(): ReactElement {

        const {ready} = this.state;

        return (
            <StylesProvider injectFirst>

                <Header/>
                <div className={styles.content}>

                    {ready ? (
                        <CircularProgress/>
                    ) : (
                        <div>App</div>
                    )}


                </div>

            </StylesProvider>

        );

    }

}
