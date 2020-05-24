
import React from 'react';

import {Card} from './index';
import {ComponentWrapper, withViewport} from '../../../test/components';


export default {
    title: 'Card',
    decorators: [story => <ComponentWrapper verticalCenter>{story()}</ComponentWrapper>]
};

const basic = <Card>Hey apple!</Card>;

export const basicMobile = withViewport()(basic);

export const basicDesktop = () => basic;
