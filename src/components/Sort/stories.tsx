
import React from 'react';

import {Sort} from './index';
import {ComponentWrapper, withViewport} from '../../../test/components';


export default {
    title: 'Sort',
    decorators: [
        fn => <ComponentWrapper>{fn()}</ComponentWrapper>
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
