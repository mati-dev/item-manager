
import {GET_ITEMS, rootReducer, SET_SEARCH, TOGGLE_FAVED} from './index';
import {initialState} from '../initialState';

import {appItem} from '../../../test/src/resources';


describe('Reducers', () => {

    test('Default', () => {

        const newState = rootReducer(initialState, {
            type: 'unknown'
        });

        expect(newState).toEqual(initialState);

    });

    test(GET_ITEMS, () => {

        const action = {
            type: GET_ITEMS,
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

    test(TOGGLE_FAVED, () => {

        const action = {
            type: TOGGLE_FAVED,
            payload: 0
        };

        const state = {...initialState, items: [appItem]};

        const newState = rootReducer(state, action);

        expect(newState).toEqual({...state, items: [{...appItem, favourite: true}]});

    });

});
