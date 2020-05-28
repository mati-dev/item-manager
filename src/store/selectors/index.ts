
import {AppState} from '../../model';


export const isAppReady = (state: AppState) => state.items.length !== 0;

export const getVisibleItems = (state: AppState) =>
    state.items
        .filter(item => {

            const {title, description, price, email} = item;

            const regex = new RegExp(getSearch(state), 'giu');

            return regex.test(title) || regex.test(description) || regex.test(email);

        })
        .sort((a, b) => {

            const sort = getSort(state);
            const key = sort.replace('-', '');

            if(!sort) {
                return 0;
            }

            const isDesc = sort.startsWith('-');
            const compare = key === 'price' ? a.price - b.price : a[key].localeCompare(b[key]);

            return isDesc
                ? -compare
                : compare;

        });

export const getSearch = (state: AppState) => state.search;

export const getSort = (state: AppState) => state.sort;
