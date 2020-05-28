
import React from 'react';
import {Provider} from 'react-redux';

import {Sort} from './index';
import {ComponentWrapper, withViewport} from '../../../test/src/components';
import {createStoryStore} from '../../../test/src/stories';


export default {
    title: 'Sort',
    decorators: [
        story => <ComponentWrapper>{story()}</ComponentWrapper>,
        story => <Provider store={createStoryStore()}>{story()}</Provider>
    ]
};

const basic = <Sort options={[{
    title: 'Title',
    key: 'title'
}, {
    title: 'Email',
    key: 'email'
}]}/>;

export const basicMobile = withViewport()(basic);

export const basicDesktop = () => basic;
