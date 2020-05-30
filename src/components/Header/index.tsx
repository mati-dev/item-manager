
import React, {ChangeEvent, ReactElement} from 'react';
import bind from 'bind-decorator';
import {connect} from 'react-redux';
import {InputAdornment, TextField} from '@material-ui/core';
import {Favorite, Search} from '@material-ui/icons';

import {Text} from '../Text';

import {getSearch} from '../../store/selectors';
import {setSearch} from '../../store/actions';
import {AppDispatch} from '../../store/typings';

import styles from './styles.scss';


interface HeaderProps {
    onFavClick(): void;
}

interface InjectedProps {
    search: string;
    setSearch(value: string): void;
}

class HeaderImpl extends React.Component<HeaderProps> {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {search} = this.injected;

        return (
            <div className={styles.wrapper}>
                <div className={styles.headerContent}>
                    <Text tag={'h1'} className={styles.title}>IM</Text>
                    <TextField className={styles.searchInput}
                               variant="outlined"
                               placeholder="Looking for something?"
                               size="small"
                               color="secondary"
                               value={search}
                               InputProps={{
                                   classes: {root: styles.searchInput, notchedOutline: styles.searchOutline},
                                   startAdornment: (
                                       <InputAdornment position="start" className={styles.searchAdornment}>
                                           <Search/>
                                       </InputAdornment>
                                   )
                               }}
                               onChange={this.handleOnSearchChange}/>
                    <div className={styles.favWrapper} onClick={this.props.onFavClick}>
                        <Favorite/>
                        <Text className={styles.favText}>Favourites</Text>
                    </div>
                </div>
            </div>
        );

    }

    @bind
    private handleOnSearchChange(event: ChangeEvent<HTMLInputElement>): void {
        this.injected.setSearch(event.target.value);
    }

}

// tslint:disable-next-line:variable-name
export const Header = connect(
    state => ({
        search: getSearch(state)
    }),
    (dispatch: AppDispatch) => ({
        setSearch: (value: string) => dispatch(setSearch(value))
    })
)(HeaderImpl);
