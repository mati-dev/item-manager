
import axios, {AxiosStatic} from 'axios';
import {Action} from 'redux';
import thunk from 'redux-thunk';
import createMockStore from 'redux-mock-store';
import Mocked = jest.Mocked;

import {appItem, item} from '../../../test/src/resources';
import {retrieveItems, setSearchValue, toggleFaved} from './index';
import {GET_ITEMS, SET_SEARCH, TOGGLE_FAVED} from '../reducers';


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
            type: GET_ITEMS,
            payload: [appItem]
        }]);

    });

    test('setSearchValue', async () => {

        const store = mockStore();
        await store.dispatch(setSearchValue('search'));

        const actions = store.getActions();
        expect(actions).toEqual([{
            type: SET_SEARCH,
            payload: 'search'
        }]);

    });

    test('toggleFaved', async () => {

        const store = mockStore();
        await store.dispatch(toggleFaved(1));

        const actions = store.getActions();
        expect(actions).toEqual([{
            type: TOGGLE_FAVED,
            payload: 1
        }]);

    });

});
