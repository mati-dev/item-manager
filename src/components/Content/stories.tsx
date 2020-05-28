
import React from 'react';
import {Provider} from 'react-redux';

import {AppContent} from './index';
import {withViewport, ComponentWrapper} from '../../../test/src/components';
import {appItem} from '../../../test/src/resources';
import {createStoryStore} from '../../../test/src/stories';


const basicStore = createStoryStore({
    items: [appItem, {...appItem, id: 1}]
});

const searchStore = createStoryStore({
    items: [appItem, {...appItem, id: 1}],
    search: 'Hey apple!'
});

export default {
    title: 'Content',
    decorators: [
        fn => <ComponentWrapper>{fn()}</ComponentWrapper>
    ]
};

const basic = (
    <Provider store={basicStore}>
        <AppContent />
    </Provider>
);

const search = (
    <Provider store={searchStore}>
        <AppContent />
    </Provider>
);

export const basicMobile = withViewport()(basic);
export const searchMobile = withViewport()(search);
export const basicDesktop = () => basic;
export const searchDesktop = () => search;
