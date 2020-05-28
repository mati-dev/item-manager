
import React, {ChangeEvent, Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import {TextField, Input, InputAdornment} from '@material-ui/core';

import {Sort} from '../Sort';
import {Text} from '../Text';

import styles from './styles.scss';
import {AppItem} from '../../model';
import {AppDispatch, setSearchValue, setPriceRange} from '../../store/actions';
import {getMaxPriceRange, getPriceRange, getSearch, getVisibleItems} from '../../store/selectors';
import {FavItemCard} from '../FavItemCard';
import bind from 'bind-decorator';


interface InjectedProps {
    items: AppItem[];
    search: string;
    priceRange: [number, number];
    maxRange: number;
    setSearch(value: string): void;
    setPriceRange(values: [number, number]): void;
}

class ContentImpl extends Component {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {items, search, priceRange, maxRange} = this.injected;

        return (
            <div className={styles.wrapper}>

                <TextField className={styles.searchInput}
                           variant="outlined"
                           placeholder="Search something awesome!"
                           size="medium"
                           value={search}
                           onChange={this.handleOnSearchChange}/>

                {priceRange && maxRange && (
                    <div className={styles.priceWrapper}>
                        <Text className={styles.priceText}>Price range:</Text>

                        <Input
                            value={priceRange[0]}
                            type="number"
                            endAdornment={<InputAdornment position="end">€</InputAdornment>}
                            onChange={this.handleMinRangeChange}/>

                        <Input
                            value={priceRange[1]}
                            type="number"
                            endAdornment={<InputAdornment position="end">€</InputAdornment>}
                            onChange={this.handleMaxRangeChange}/>
                    </div>
                )}

                <Sort className={styles.sort} options={[
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

    @bind
    private handleMinRangeChange(event: ChangeEvent<HTMLInputElement>): void {
        this.injected.setPriceRange([+event.target.value, this.injected.priceRange[1]]);
    }

    @bind
    private handleMaxRangeChange(event: ChangeEvent<HTMLInputElement>): void {
        this.injected.setPriceRange([this.injected.priceRange[0], +event.target.value]);
    }

}

// tslint:disable-next-line:variable-name
export const Content = connect(
    state => ({
        items: getVisibleItems(state),
        search: getSearch(state),
        priceRange: getPriceRange(state),
        maxPriceRange: getMaxPriceRange(state)
    }),
    (dispatch: AppDispatch) => ({
        setSearch: (value: string) => dispatch(setSearchValue(value)),
        setPriceRange: (values: [number, number]) => dispatch(setPriceRange(values))
    })
)(ContentImpl);
