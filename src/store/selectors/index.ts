
import {AppState} from '../../model';


export const isAppReady = (state: AppState) => state.items.length !== 0;

export const getVisibleItems = (state: AppState) => {

    const maxLoadedData = getMaxLoadedData(state);

    return state.items
        .filter(item => {

            const {title, description, price, email} = item;
            const range = getPriceRange(state);

            const regex = new RegExp(getSearch(state), 'giu');

            return (!range || (range && price >= range[0] && price <= range[1]))
                && (regex.test(title) || regex.test(description) || regex.test(email));

        })
        .sort((a, b) => {

            const sort = getSort(state);
            const key = sort.replace('-', '');

            if(!sort) {
                return 0;
            }

            const isDesc = sort.startsWith('-');
            const compare = key === 'price'
                ? a.price - b.price
                : a[key].localeCompare(b[key]);

            return isDesc
                ? -compare
                : compare;

        })
        .slice(0, maxLoadedData);
};

export const getVisibleFavItems = (state: AppState) => state.items
    .filter(item => {

        const {title} = item;

        return new RegExp(getSearch(state), 'giu').test(title) && item.favourite;

    });

export const getSearch = (state: AppState) => state.search;

export const getSort = (state: AppState) => state.sort;

export const getPriceRange = (state: AppState) => state.priceRange;

export const getMaxPriceRange = (state: AppState) => state.maxPriceRange;

export const getMaxLoadedData = (state: AppState) => state.maxLoadedData;

export const getItemCount = (state: AppState) => state.items.length;
