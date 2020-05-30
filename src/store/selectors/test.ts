
import {
    getItemCount,
    getMaxLoadedData,
    getMaxPriceRange,
    getPriceRange,
    getSearch, getSortDirection, getSortKey,
    getVisibleFavItems,
    getVisibleItems,
    isAppReady
} from './index';
import {initialState} from '../initialState';
import {appItem} from '../../../test/src/resources';
import {appItems} from '../../../test/src/resources/appItems';
import {appConfig} from '../../../config/appConfig';


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

        // TODO: Need to implement sort and filter tests

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

    test('getSortKey', () => {

        const emptySort = getSortKey(initialState);
        const filledSort = getSortKey({...initialState, sort: 'title'});

        expect(emptySort).toEqual('');
        expect(filledSort).toEqual('title');

    });

    test('getSortDirection', () => {

        const ascDirection = getSortDirection({...initialState, sort: 'title'});
        const descDirection = getSortDirection({...initialState, sort: '-title'});

        expect(ascDirection).toEqual('asc');
        expect(descDirection).toEqual('desc');

    });

    test('getPriceRange', () => {

        const range = getPriceRange({...initialState, priceRange: [0, 100]});

        expect(range).toEqual([0, 100]);

    });

    test('getMaxPriceRange', () => {

        const range = getMaxPriceRange({...initialState, items: appItems});

        expect(range).toEqual(Math.min(appConfig.priceInfinity, 288000));

    });

    test('getVisibleFavItems', () => {

        // TODO: Need to implement filter tests
        const items = getVisibleFavItems({...initialState, items: [appItem]});

        expect(items).toEqual([]);

    });

    test('getMaxLoadedData', () => {

        const maxLoadedData = getMaxLoadedData(initialState);

        expect(maxLoadedData).toEqual(5);

    });

    test('getItemCount', () => {
        const itemCount = getItemCount({...initialState, items: [appItem]});

        expect(itemCount).toEqual(1);
    });

});
