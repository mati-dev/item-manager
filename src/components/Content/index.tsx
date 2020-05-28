
import React, {ChangeEvent, Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import {TextField, Input, InputAdornment, CircularProgress} from '@material-ui/core';
import bind from 'bind-decorator';
import classNames from 'classnames';
import InfiniteScroll from 'react-infinite-scroller';

import {Sort} from '../Sort';
import {Text} from '../Text';

import {AppItem, Styled} from '../../model';
import {AppDispatch, setSearchValue, setPriceRange, incrementMaxLoadedData} from '../../store/actions';
import {
    getMaxLoadedData,
    getMaxPriceRange,
    getPriceRange,
    getSearch,
    getVisibleFavItems,
    getVisibleItems,
    getItemCount
} from '../../store/selectors';
import {FavItemCard} from '../FavItemCard';

import styles from './styles.scss';


interface AppContentProps extends Styled {
    favs?: boolean;
}

interface InjectedProps {
    visibleItems: AppItem[];
    favItems: AppItem[];
    search: string;
    priceRange: [number, number];
    maxPriceRange: number;
    maxLoadedData: number;
    itemCount: number;
    setSearch(value: string): void;
    setPriceRange(values: [number, number]): void;
    loadMore(): void;
}

class AppContentImpl extends Component<AppContentProps> {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {favs, className, style} = this.props;
        const {
            visibleItems, favItems, search, priceRange,
            maxPriceRange, loadMore, maxLoadedData, itemCount
        } = this.injected;

        const cards = (favs ? favItems : visibleItems).map(item => (
            <FavItemCard key={`fav_item_${item.id}`} item={item} className={styles.card} favs={favs}/>
        ));

        return (
            <div className={classNames(styles.wrapper, favs && styles.favs, className)} style={style}>

                <TextField className={styles.searchInput}
                           variant="outlined"
                           placeholder="Search something awesome!"
                           size="medium"
                           value={search}
                           onChange={this.handleOnSearchChange}/>

                {!favs && priceRange && maxPriceRange && (
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

                {!favs && (
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
                )}


                <div className={classNames(styles.cardWrapper, favs && styles.favs)}>
                    {!favs ? (
                        <InfiniteScroll hasMore={maxLoadedData < itemCount}
                                        loader={<div className={styles.progress}><CircularProgress /></div>}
                                        loadMore={loadMore}>
                            {cards}
                        </InfiniteScroll>

                    ) : cards}

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
export const AppContent = connect(
    state => ({
        visibleItems: getVisibleItems(state),
        favItems: getVisibleFavItems(state),
        search: getSearch(state),
        priceRange: getPriceRange(state),
        maxPriceRange: getMaxPriceRange(state),
        maxLoadedData: getMaxLoadedData(state),
        itemCount: getItemCount(state)
    }),
    (dispatch: AppDispatch) => ({
        setSearch: (value: string) => dispatch(setSearchValue(value)),
        setPriceRange: (values: [number, number]) => dispatch(setPriceRange(values)),
        loadMore: () => dispatch(incrementMaxLoadedData())
    })
)(AppContentImpl);
