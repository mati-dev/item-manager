
import React, {Component, ReactElement} from 'react';
import bind from 'bind-decorator';
import {connect} from 'react-redux';

import {getSort} from '../../store/selectors';
import {AppDispatch, setSort} from '../../store/actions';

import {SortItem} from '../SortItem';
import {Text} from '../Text';

import styles from './styles.scss';
import {Styled} from '../../model';
import classNames from 'classnames';


interface Option {
    title: string;
    key: string;
}

interface SortProps extends Styled {
    options: Option[];
}

interface InjectedProps {
    sort: string;
    setSort(key: string): void;
}

class SortImpl extends Component<SortProps> {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {options, className, style} = this.props;
        const {sort} = this.injected;

        return (
            <div className={classNames(styles.wrapper, className)} style={style}>
                <Text className={styles.title} >Sort by...</Text>
                {options.map(option => (
                    <SortItem key={option.key}
                              sortKey={option.key}
                              sort={sort}
                              onClick={() => this.onItemClick(option.key)}>
                        {option.title}
                    </SortItem>
                ))}
            </div>
        );

    }

    @bind
    private onItemClick(key: string): void {
        this.injected.setSort(key);
    }

}

// tslint:disable-next-line:variable-name
export const Sort = connect(
    state => ({
        sort: getSort(state)
    }),
    (dispatch: AppDispatch) => ({
        setSort: sort => dispatch(setSort(sort))
    })
)(SortImpl);
