
import {getSearch, getVisibleItems, isAppReady} from './index';
import {initialState} from '../initialState';
import {appItem} from '../../../test/src/resources';


describe('Selectors', () => {

    test('isAppReady', () => {

        const beforeReady = isAppReady(initialState);
        const afterReady = isAppReady({
            ...initialState,
            items: [appItem]
        });

        expect(beforeReady).toBeFalsy();
        expect(afterReady).toBeTruthy();

    });

    test('getVisibleItems', () => {

        const state = {
            ...initialState,
            items: [appItem]
        };

        const emptySearch = getVisibleItems(state);
        const withResults = getVisibleItems({...state, search: appItem.title});
        const withoutResults = getVisibleItems({...state, search: 'whatever'});

        expect(emptySearch).toEqual([appItem]);
        expect(withResults).toEqual([appItem]);
        expect(withoutResults).toEqual([]);

    });

    test('getSearch', () => {

        const emptySearch = getSearch(initialState);
        const searchValue = getSearch({...initialState, search: appItem.title});

        expect(emptySearch).toEqual('');
        expect(searchValue).toEqual(appItem.title);

    });

});
