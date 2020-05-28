
import {Reducer} from 'redux';

import {AppState} from '../../model';
import {initialState} from '../initialState';

export const GET_ITEMS = 'app:get-items';
export const SET_SEARCH = 'app:set-search-value';
export const TOGGLE_FAVED = 'app:toggle-faved';


export const rootReducer: Reducer<AppState> = (state = initialState, {type, payload}) => {

    switch(type) {

        case GET_ITEMS:
            return {
                ...state,
                items: payload
            };

        case SET_SEARCH:
            return {
                ...state,
                search: payload
            };

        case TOGGLE_FAVED:
            return {
                ...state,
                items: state.items.map(item => item.id === payload ? {...item, favourite: !item.favourite} : item)
            };

        default:
            return state;

    }

};
