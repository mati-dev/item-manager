
import axios, {AxiosStatic} from 'axios';
import {Action} from 'redux';
import thunk from 'redux-thunk';
import createMockStore from 'redux-mock-store';
import Mocked = jest.Mocked;

import {appItem, item} from '../../../test/src/resources';
import {
    retrieveItems,
    incrementMaxLoadedData,
    setPriceRange,
    setSearch,
    setSort,
    toggleFaved, setFavouriteSearch
} from './index';
import {
    RETRIEVE_ITEMS, SET_FAVOURITE_SEARCH,
    SET_MAX_LOADED_DATA,
    SET_PRICE_RANGE,
    SET_SEARCH,
    SET_SORT,
    TOGGLE_FAVED
} from '../reducers';
import {initialState} from '../initialState';


jest.mock('axios');

describe('Actions', () => {

    const mockedAxios = axios as Mocked<AxiosStatic>;
    const mockStore = createMockStore([thunk]);

    test('retrieveItems', async () => {

        const store = mockStore();

        mockedAxios.get.mockResolvedValue({
            data: {
                items: [item]
            }
        });

        await store.dispatch(retrieveItems() as unknown as Action);

        const actions = store.getActions();
        expect(actions).toEqual([{
            type: RETRIEVE_ITEMS,
            payload: [appItem]
        }, {
            type: SET_PRICE_RANGE,
            payload: [0, appItem.price]
        }]);

    });

    test('setSearch', async () => {

        const store = mockStore();
        await store.dispatch(setSearch('search'));

        const actions = store.getActions();
        expect(actions).toEqual([{
            type: SET_SEARCH,
            payload: 'search'
        }]);

    });

    test('setFavouriteSearch', () => {

        const store = mockStore();
        store.dispatch(setFavouriteSearch('search'));

        const actions = store.getActions();
        expect(actions).toEqual([{
            type: SET_FAVOURITE_SEARCH,
            payload: 'search'
        }]);

    });

    test('toggleFaved', () => {

        const store = mockStore();
        store.dispatch(toggleFaved(1));

        const actions = store.getActions();
        expect(actions).toEqual([{
            type: TOGGLE_FAVED,
            payload: 1
        }]);

    });

    test('setSort', () => {

        const store = mockStore(initialState);

        store.dispatch(setSort('title') as unknown as Action);

        const actions = store.getActions();
        expect(actions).toEqual([{
            type: SET_SORT,
            payload: 'title'
        }]);

    });

    test('setPriceRange', async () => {

        const store = mockStore();
        await store.dispatch(setPriceRange([0, 100]));

        const actions = store.getActions();
        expect(actions).toEqual([{
            type: SET_PRICE_RANGE,
            payload: [0, 100]
        }]);

    });

    test('incrementMaxLoadedData', async () => {

        const store = mockStore(initialState);
        await store.dispatch(incrementMaxLoadedData() as unknown as Action);

        const actions = store.getActions();
        expect(actions).toEqual([{
            type: SET_MAX_LOADED_DATA,
            payload: 10
        }]);

    });

});
