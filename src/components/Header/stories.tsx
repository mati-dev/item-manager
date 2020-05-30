
import React from 'react';
import {action} from '@storybook/addon-actions';

import {Header} from './index';
import {withViewport} from '../../../test/src/components';
import {Provider} from 'react-redux';
import {createStoryStore} from '../../../test/src/stories';


export default {
    title: 'Header'
};

const basic = <Provider store={createStoryStore()}><Header onFavClick={action('onClick')}/></Provider>;
const withSearch =
    <Provider store={createStoryStore({search: 'Hello'})}>
        <Header onFavClick={action('onClick')}/>
    </Provider>;

export const basicMobile = withViewport()(basic);
export const basicDesktop = () => basic;

export const withSearchMobile = withViewport()(withSearch);
export const withSearchDesktop = () => withSearch;
