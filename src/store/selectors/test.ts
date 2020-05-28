
import {getMaxPriceRange, getPriceRange, getSearch, getSort, getVisibleItems, isAppReady} from './index';
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

        // TODO: Need to implement sort cases

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

    test('getSort', () => {

        const emptySort = getSort(initialState);
        const filledSort = getSort({...initialState, sort: 'title'});

        expect(emptySort).toEqual('');
        expect(filledSort).toEqual('title');

    });

    test('getPriceRange', () => {

        const range = getPriceRange({...initialState, priceRange: [0, 100]});

        expect(range).toEqual([0, 100]);

    });

    test('getMaxPriceRange', () => {

        const range = getMaxPriceRange({...initialState, maxPriceRange: 100});

        expect(range).toEqual(100);

    });

});
