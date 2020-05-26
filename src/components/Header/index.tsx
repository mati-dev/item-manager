
import React, {ReactElement} from 'react';
import {Favorite} from '@material-ui/icons';

import {Text} from '../Text';

import styles from './styles.scss';


export function Header(): ReactElement {

    return (
        <div className={styles.wrapper}>
            <Text tag={'h1'} className={styles.title}>Item Manager</Text>
            <div className={styles.favWrapper}>
                <Favorite/>
                <Text className={styles.favText}>Favourites</Text>
            </div>
        </div>
    );

}
