
import React, {ChangeEvent, Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import {TextField} from '@material-ui/core';

import {Sort} from '../Sort';

import styles from './styles.scss';
import {AppItem} from '../../model';
import {AppDispatch, setSearchValue} from '../../store/actions';
import {getSearch, getVisibleItems} from '../../store/selectors';
import {FavItemCard} from '../FavItemCard';
import bind from 'bind-decorator';


interface InjectedProps {
    items: AppItem[];
    search: string;
    setSearch(value: string): void;
}

class ContentImpl extends Component {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {items, search} = this.injected;

        return (
            <div className={styles.wrapper}>

                <TextField className={styles.searchInput}
                           variant="outlined"
                           placeholder="Search something awesome!"
                           size="medium"
                           value={search}
                           onChange={this.handleOnSearchChange}/>

                <Sort options={[
                    {
                        title: 'Title',
                        key: 'title'
                    }, {
                        title: 'Description',
                        key: 'description'
                    }, {
                        title: 'Price',
                        key: 'price'
                    }, {
                        title: 'Email',
                        key: 'email'
                    }
                ]} />

                <div>
                    {items.map(item => (
                        <FavItemCard key={`fav_item+${item.id}`} item={item} className={styles.card}/>
                    ))}
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
export const Content = connect(
    state => ({
        items: getVisibleItems(state),
        search: getSearch(state)
    }),
    (dispatch: AppDispatch) => ({
        setSearch: (value: string) => dispatch(setSearchValue(value))
    })
)(ContentImpl);
