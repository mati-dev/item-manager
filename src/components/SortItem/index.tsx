
import React, {ReactElement} from 'react';

import {Text} from '../Text';

import styles from './styles.scss';


interface SortItemProps {
    sortKey: string;
    sort?: boolean;
    asc?: boolean;
    children?: string;
    onClick(): void;
}

// TODO: I don't really like the api (needing to indicate sort & asc).
//       Need to think of a good way to handle with one prop
export function SortItem(props: SortItemProps): ReactElement {

    const {children, sort, asc, onClick} = props;

    return (
        <div className={styles.wrapper} onClick={onClick}>
            <Text>{children}{sort && (asc ? ' ↑' : ' ↓')}</Text>
        </div>
    );

}
