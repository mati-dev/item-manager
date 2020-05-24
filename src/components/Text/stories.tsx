
import React from 'react';

import {Text} from './index';
import {ComponentWrapper} from '../../../test/components/ComponentWrapper';


export default {
    title: 'Text',
    decorators: [story => <ComponentWrapper verticalCenter>{story()}</ComponentWrapper>]
};

export const basic = () => (
    <Text>Hey apple!</Text>
);
