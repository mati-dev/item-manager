
import React, {ReactElement} from 'react';

import {Text} from '../Text';

import styles from './styles.scss';


interface SortItemProps {
    sortKey: string;
    sort: string;
    children?: string;
    onClick(): void;
}

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
