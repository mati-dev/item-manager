
import React from 'react';
import {Provider} from 'react-redux';

import {Sort} from './index';
import {ComponentWrapper, withViewport} from '../../../test/src/components';
import {createStoryStore} from '../../../test/src/stories';


export default {
    title: 'Sort',
    decorators: [
        story => <ComponentWrapper>{story()}</ComponentWrapper>
    ]
};

const options = [{
    title: 'Title',
    key: 'title'
}, {
    title: 'Email',
    key: 'email'
}];

const basic = <Provider store={createStoryStore()}><Sort options={options}/></Provider>;
const withSortAsc = <Provider store={createStoryStore({sort: 'title'})}><Sort options={options}/></Provider>;
const withSortDesc = <Provider store={createStoryStore({sort: '-title'})}><Sort options={options}/></Provider>;

export const basicMobile = withViewport()(basic);
export const withSortAscMobile = withViewport()(withSortAsc);
export const withSortDescMobile = withViewport()(withSortDesc);

export const basicDesktop = () => basic;
export const withSortAscDesktop = () => withSortAsc;
export const withSortDescDesktop = () => withSortDesc;
