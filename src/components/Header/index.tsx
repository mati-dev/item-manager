
import React, {ReactElement} from 'react';
import {Favorite} from '@material-ui/icons';

import {Text} from '../Text';

import styles from './styles.scss';


interface HeaderProps {
    onFavClick(): void;
}

export function Header(props: HeaderProps): ReactElement {

    // TODO: Could be interesting for the header to be sticky

    return (
        <div className={styles.wrapper}>
            <Text tag={'h1'} className={styles.title}>Item Manager</Text>
            <div className={styles.favWrapper} onClick={props.onFavClick}>
                <Favorite/>
                <Text className={styles.favText}>Favourites</Text>
            </div>
        </div>
    );

}
