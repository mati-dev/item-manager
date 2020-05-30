
import React, {ChangeEvent, Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import bind from 'bind-decorator';
import classNames from 'classnames';
import {Select, MenuItem, InputLabel, FormControl} from '@material-ui/core';
import {ArrowUpward, ArrowDownward} from '@material-ui/icons';


import {getSortDirection, getSortKey} from '../../store/selectors';
import {setSort} from '../../store/actions';
import {AppDispatch} from '../../store/typings';
import {Styled} from '../../model';

import styles from './styles.scss';


interface Option {
    title: string;
    key: string;
}

interface SortProps extends Styled {
    options: Option[];
}

interface InjectedProps {
    sort: string;
    direction: string;
    dispatchSetSort(key: string): void;
}

class SortImpl extends Component<SortProps> {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {options, className, style} = this.props;
        const {sort, direction} = this.injected;

        return (
            <div className={classNames(styles.wrapper, className)} style={style}>
                <FormControl className={styles.formControl} size="small">
                    <InputLabel className={styles.label} id="sort-label">Sort by...</InputLabel>
                    <Select value={sort}
                            variant="outlined"
                            labelId="sort-label"
                            label="Sort by..."
                            onChange={(event: ChangeEvent<HTMLSelectElement>) => this.setSortKey(event.target.value)}>
                        <MenuItem key="none" value="">
                            None
                        </MenuItem>
                        {options.map(option => (
                            <MenuItem key={option.key} value={option.key}>
                                {option.title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


                {sort && (
                    direction === 'asc' ? (
                            <ArrowUpward className={styles.arrow} onClick={this.toggleSortDirection} />
                        )
                        : (
                            <ArrowDownward className={styles.arrow} onClick={this.toggleSortDirection}/>
                        )
                )}

            </div>
        );

    }

    @bind
    private setSortKey(value: string): void {
        this.injected.dispatchSetSort(value);
    }

    @bind
    private toggleSortDirection(): void {

        const {sort, direction, dispatchSetSort} = this.injected;

        dispatchSetSort(direction === 'desc' ? sort : `-${sort}`);

    }

}

// tslint:disable-next-line:variable-name
export const Sort = connect(
    state => ({
        sort: getSortKey(state),
        direction: getSortDirection(state)
    }),
    (dispatch: AppDispatch) => ({
        dispatchSetSort: sort => dispatch(setSort(sort))
    })
)(SortImpl);
