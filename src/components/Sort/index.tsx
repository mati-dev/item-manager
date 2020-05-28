
import React, {Component, ReactElement} from 'react';
import bind from 'bind-decorator';


import {SortItem} from '../SortItem';

import styles from './styles.scss';
import {Text} from '../Text';


interface Option {
    title: string;
    key: string;
}

interface SortProps {
    options: Option[];
}

interface SortState {
    sortKey?: string;
    asc?: boolean;
}

export class Sort extends Component<SortProps, SortState> {

    public constructor(props: SortProps) {
        super(props);

        this.state = {};

    }

    public render(): ReactElement {

        const {options} = this.props;
        const {sortKey, asc} = this.state;

        return (
            <div className={styles.wrapper}>
                <Text className={styles.title} >Sort by...</Text>
                {options.map(option => (
                    <SortItem key={option.key}
                              sortKey={option.key}
                              asc={asc}
                              sort={option.key === sortKey}
                              onClick={() => this.onItemClick(option.key)}>
                        {option.title}
                    </SortItem>
                ))}
            </div>
        );

    }

    @bind
    private onItemClick(key: string): void {

        const {sortKey, asc} = this.state;
        const isSameKey = sortKey === key;

        // TODO: Refactor this part of the logic, I'm kind of disgusted by it
        this.setState(sortKey ? {
            sortKey: (isSameKey && asc) ? undefined : key,
            asc: isSameKey && !asc
        } : {
            sortKey: key
        });

    }

}
