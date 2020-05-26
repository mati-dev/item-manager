
import React from 'react';
import {action} from '@storybook/addon-actions';

import {SortItem} from './index';
import {withViewport, ComponentWrapper} from '../../../test/src/components';


export default {
    title: 'SortItem',
    decorators: [
        story => <ComponentWrapper verticalCenter horizontalCenter>{story()}</ComponentWrapper>
    ]
};

const basic = <SortItem sortKey={'basic'} onClick={action('click')}>Basic</SortItem>;
const desc = <SortItem sortKey={'desc'} sort asc={false} onClick={action('click')}>Desc</SortItem>;
const asc = <SortItem sortKey={'asc'} sort asc onClick={action('click')}>Asc</SortItem>;

export const basicMobile = withViewport()(basic);
export const descMobile = withViewport()(desc);
export const ascMobile = withViewport()(asc);

export const basicDesktop = () => basic;
export const descDesktop = () => desc;
export const ascDesktop = () => asc;
