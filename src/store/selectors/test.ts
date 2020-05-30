
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

        const state = {
            ...initialState,
            items: appItems
        };

        const emptySearch = getVisibleItems(state);
        const withResults = getVisibleItems({...state, search: appItems[0].email});
        const withoutResults = getVisibleItems({...state, search: 'whatever'});
        const sortedAsc = getVisibleItems({...state, sort: 'title'});
        const sortedDesc = getVisibleItems({...state, sort: '-title'});
        const sortedPriceAsc = getVisibleItems({...state, sort: 'price'});
        const sortedPriceDesc = getVisibleItems({...state, sort: '-price'});

        expect(emptySearch).toEqual(appItems);
        expect(withResults).toEqual([appItems[0]]);
        expect(withoutResults).toEqual([]);
        expect(sortedPriceAsc).toEqual(appItems.sort((a, b) => a.price - b.price));
        expect(sortedPriceDesc).toEqual(appItems.sort((a, b) => b.price - a.price));
        expect(sortedAsc).toEqual(appItems.sort((a, b) => a.title.localeCompare(b.title)));
        expect(sortedDesc).toEqual(appItems.sort((a, b) => -a.title.localeCompare(b.title)));

    });

    test('getVisibleFavItems', () => {

        const items = appItems.map((item, index) => index % 2 ? {...item, favourite: true} : item);
        const favItems = items.filter(item => item.favourite);
        const state = {...initialState, items};

        const emptySearch = getVisibleFavItems(state);
        const withResults = getVisibleFavItems({...state, favSearch: favItems[0].title});
        const withoutResults = getVisibleFavItems({...state, favSearch: 'whatever'});

        expect(emptySearch).toEqual(favItems);
        expect(withResults).toEqual([favItems[0]]);
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

    test('getMaxLoadedData', () => {

        const maxLoadedData = getMaxLoadedData(initialState);

        expect(maxLoadedData).toEqual(5);

    });

    test('getItemCount', () => {

        const itemCount = getItemCount({...initialState, items: [appItem]});

        expect(itemCount).toEqual(1);

    });

});
