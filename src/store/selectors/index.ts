
import {AppState} from '../../model';


export const isAppReady = (state: AppState) => state.items.length !== 0;

export const getVisibleItems = (state: AppState) => state.items.filter(item => {

    const {title, description, price, email} = item;

    const regex = new RegExp(getSearch(state), 'giu');

    return regex.test(title) || regex.test(description) || regex.test(email);

});

export const getSearch = (state: AppState) => state.search;
