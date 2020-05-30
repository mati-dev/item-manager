
import React, {Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import {CircularProgress} from '@material-ui/core';
import classNames from 'classnames';
import InfiniteScroll from 'react-infinite-scroller';

import {Sort} from '../Sort';
import {FavItemCard} from '../FavItemCard';
import {PriceSlider} from '../PriceSlider';
import {Text} from '../Text';

import {AppItem, Styled} from '../../model';
import {incrementMaxLoadedData} from '../../store/actions';
import {getMaxLoadedData, getVisibleItems, getItemCount} from '../../store/selectors';
import {AppDispatch} from '../../store/typings';

import styles from './styles.scss';


interface InjectedProps {
    visibleItems: AppItem[];
    maxLoadedData: number;
    itemCount: number;
    loadMore(): void;
}

class AppContentImpl extends Component<Styled> {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {className, style} = this.props;
        const {visibleItems, loadMore, maxLoadedData, itemCount} = this.injected;

        const cards = visibleItems.map(item => (
            <FavItemCard key={`fav_item_${item.id}`} item={item} className={styles.card}/>
        ));

        return (
            <div className={classNames(styles.wrapper, className)} style={style}>

                <div className={styles.priceSortWrapper}>
                    <Sort className={styles.sort}
                        options={[
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
                    <PriceSlider className={styles.priceSlider} />
                </div>

                {visibleItems.length !== 0 ? (
                    <InfiniteScroll hasMore={maxLoadedData < itemCount}
                                    loader={<div className={styles.progress}><CircularProgress /></div>}
                                    loadMore={loadMore}>
                        {cards}
                    </InfiniteScroll>
                ) : (
                    <Text className={styles.noItems} tag={'p'}>No items to show :'(</Text>
                )}

            </div>
        );
    }

}

// tslint:disable-next-line:variable-name
export const AppContent = connect(
    state => ({
        visibleItems: getVisibleItems(state),
        maxLoadedData: getMaxLoadedData(state),
        itemCount: getItemCount(state)
    }),
    (dispatch: AppDispatch) => ({
        loadMore: () => dispatch(incrementMaxLoadedData())
    })
)(AppContentImpl);
