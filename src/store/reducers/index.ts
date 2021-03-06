
import {Reducer} from 'redux';

import {AppState} from '../../model';
import {initialState} from '../initialState';

export const RETRIEVE_ITEMS = 'app:get-items';
export const SET_SEARCH = 'app:set-search';
export const SET_FAVOURITE_SEARCH = 'app:set-favourite-search';
export const TOGGLE_FAVED = 'app:toggle-faved';
export const SET_SORT = 'app:set-sort';
export const SET_PRICE_RANGE = 'app:set-price-range';
export const SET_MAX_LOADED_DATA = 'app:set-max-loaded-data';


export const rootReducer: Reducer<AppState> = (state = initialState, {type, payload}) => {

    switch(type) {

        case RETRIEVE_ITEMS:
            return {
                ...state,
                items: payload
            };

        case SET_SEARCH:
            return {
                ...state,
                search: payload
            };

        case SET_FAVOURITE_SEARCH:
            return {
                ...state,
                favSearch: payload
            };

        case TOGGLE_FAVED:
            return {
                ...state,
                items: state.items.map(item => item.id === payload ? {...item, favourite: !item.favourite} : item)
            };

        case SET_SORT:
            return {
                ...state,
                sort: payload
            };

        case SET_PRICE_RANGE:
            return {
                ...state,
                priceRange: payload
            };

        case SET_MAX_LOADED_DATA:
            return {
                ...state,
                maxLoadedData: payload
            };

        default:
            return state;

    }

};
