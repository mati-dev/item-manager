
import React from 'react';
import {Provider} from 'react-redux';

import {AppContent} from './index';
import {withViewport, ComponentWrapper} from '../../../test/src/components';
import {createStoryStore} from '../../../test/src/stories';
import {appItems} from '../../../test/src/resources/appItems';


const basicStore = createStoryStore({
    items: appItems
});

const noItemsStore = createStoryStore();

const sortedAscStore = createStoryStore({
    items: appItems,
    sort: 'title'
});

const sortedDescStore = createStoryStore({
    items: appItems,
    sort: '-title'
});

const priceRangeStore = createStoryStore({
    items: appItems,
    priceRange: [0, 700]
});

export default {
    title: 'AppContent',
    decorators: [
        fn => <ComponentWrapper>{fn()}</ComponentWrapper>
    ]
};

const basic = (
    <Provider store={basicStore}>
        <AppContent />
    </Provider>
);

const noItems = (
    <Provider store={noItemsStore}>
        <AppContent />
    </Provider>
);

const sortedAsc = (
    <Provider store={sortedAscStore}>
        <AppContent />
    </Provider>
);

const sortedDesc = (
    <Provider store={sortedDescStore}>
        <AppContent />
    </Provider>
);

const priceRange = (
    <Provider store={priceRangeStore}>
        <AppContent />
    </Provider>
);

export const basicMobile = withViewport()(basic);
export const noItemsMobile = withViewport()(noItems);
export const sortedAscMobile = withViewport()(sortedAsc);
export const sortedDescMobile = withViewport()(sortedDesc);
export const priceRangeMobile = withViewport()(priceRange);

export const basicDesktop = () => basic;
export const noItemsDesktop = () => noItems;
export const sortedAscDesktop = () => sortedAsc;
export const sortedDescDesktop = () => sortedDesc;
export const priceRangeDesktop = () => priceRange;
