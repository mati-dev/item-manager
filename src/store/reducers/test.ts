
import {
    RETRIEVE_ITEMS,
    rootReducer, SET_FAVOURITE_SEARCH,
    SET_MAX_LOADED_DATA,
    SET_PRICE_RANGE,
    SET_SEARCH, SET_SORT,
    TOGGLE_FAVED
} from './index';
import {initialState} from '../initialState';

import {appItem} from '../../../test/src/resources';


describe('Reducers', () => {

    test('Default', () => {

        const newState = rootReducer(initialState, {
            type: 'unknown'
        });

        expect(newState).toEqual(initialState);

    });

    test(RETRIEVE_ITEMS, () => {

        const action = {
            type: RETRIEVE_ITEMS,
            payload: [appItem]
        };

        const newState = rootReducer(initialState, action);

        expect(newState).toEqual({...initialState, items: action.payload});

    });

    test(SET_SEARCH, () => {

        const action = {
            type: SET_SEARCH,
            payload: 'iPhone'
        };

        const newState = rootReducer(initialState, action);

        expect(newState).toEqual({...initialState, search: action.payload});

    });

    test(SET_FAVOURITE_SEARCH, () => {

        const action = {
            type: SET_FAVOURITE_SEARCH,
            payload: 'iPhone'
        };

        const newState = rootReducer(initialState, action);

        expect(newState).toEqual({...initialState, favSearch: action.payload});

    });

    test(TOGGLE_FAVED, () => {

        const action = {
            type: TOGGLE_FAVED,
            payload: 0
        };

        const state = {...initialState, items: [appItem]};

        const newState = rootReducer(state, action);

        expect(newState).toEqual({...state, items: [{...appItem, favourite: true}]});

    });

    test(SET_PRICE_RANGE, () => {

        const action = {
            type: SET_PRICE_RANGE,
            payload: [0, 100]
        };

        const newState = rootReducer(initialState, action);

        expect(newState).toEqual({...initialState, priceRange: action.payload});

    });

    test(SET_MAX_LOADED_DATA, () => {

        const action = {
            type: SET_MAX_LOADED_DATA,
            payload: 10
        };

        const newState = rootReducer(initialState, action);

        expect(newState).toEqual({...initialState, maxLoadedData: action.payload});

    });

    test(SET_SORT, () => {

        const action = {
            type: SET_SORT,
            payload: 'price'
        };

        const newState = rootReducer(initialState, action);

        expect(newState).toEqual({...initialState, sort: action.payload});

    });

});
