
import React, {Component, ReactElement} from 'react';

import styles from './styles.scss';


export class App extends Component {

    public render(): ReactElement {

        return (
            <div>Hey <span className={styles.bold}>apple!</span></div>
    );

    }

}
