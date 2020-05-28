
import React, {ReactElement} from 'react';

import {Text} from '../Text';

import styles from './styles.scss';


interface SortItemProps {
    sortKey: string;
    sort: string;
    children?: string;
    onClick(): void;
}

// TODO: I don't really like the api (needing to indicate sort & asc).
//       Need to think of a good way to handle with one prop
export function SortItem(props: SortItemProps): ReactElement {

    const {children, sort, sortKey, onClick} = props;
    const processedSort = sort.replace('-', '');
    const isSorted = processedSort === sortKey;
    const asc = !sort.startsWith('-');

    return (
        <div className={styles.wrapper} onClick={onClick}>
            <Text>{children}{isSorted && (asc ? ' ↑' : ' ↓')}</Text>
        </div>
    );

}
