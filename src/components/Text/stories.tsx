
import React from 'react';

import {Text} from './index';
import {ComponentWrapper} from '../../../test/components/ComponentWrapper';
import {withViewport} from '../../../test/components';


export default {
    title: 'Text',
    decorators: [story => <ComponentWrapper fullWidth>{story()}</ComponentWrapper>]
};

const component = (
    <div>

        <Text tag={'h1'}>Hey apple!</Text>
        <Text tag={'h2'}>Hey apple!</Text>
        <Text tag={'h3'}>Hey apple!</Text>
        <Text tag={'p'}>Hey apple!</Text>

        <Text>Hey apple!</Text>

    </div>
);

export const basicMobile = withViewport()(component);
export const basicDesktop = () => component;
