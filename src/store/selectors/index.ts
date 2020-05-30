
import {AppState} from '../../model';
import {appConfig} from '../../../config/appConfig';


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

            const key = getSortKey(state);

            if(!key) {
                return 0;
            }

            const direction = getSortDirection(state);
            const compare = key === 'price'
                ? a.price - b.price
                : a[key].localeCompare(b[key]);

            return direction === 'desc'
                ? -compare
                : compare;

        })
        .slice(0, maxLoadedData);
};

export const getVisibleFavItems = (state: AppState) => state.items
    .filter(item => {

        const {title} = item;

        return new RegExp(getFavSearch(state), 'giu').test(title) && item.favourite;

    });

export const getSearch = (state: AppState) => state.search;
export const getFavSearch = (state: AppState) => state.favSearch;

export const getSortKey = (state: AppState) => state.sort.replace('-', '');
export const getSortDirection = (state: AppState) => state.sort.startsWith('-') ? 'desc' : 'asc';

export const getPriceRange = (state: AppState) =>
    state.priceRange.map(price => price === appConfig.priceInfinity ? Infinity : price);

export const getMaxPriceRange = (state: AppState) => Math.min(
    state.items.reduce((price, item) => {
        return price > item.price ? price : item.price;
    }, 0),
    appConfig.priceInfinity);

export const getMaxLoadedData = (state: AppState) => state.maxLoadedData;

export const getItemCount = (state: AppState) => state.items.length;
