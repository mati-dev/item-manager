
import React from 'react';
import {Provider} from 'react-redux';
import {action} from '@storybook/addon-actions';

import {FavouriteModal} from './index';
import {withViewport} from '../../../test/src/components';
import {createStoryStore} from '../../../test/src/stories';
import {appItems} from '../../../test/src/resources/appItems';


export default {
    title: 'FavouriteModal'
};

const withoutItems =
    <Provider store={createStoryStore()}>
        <FavouriteModal open onClose={action('onClose')} />
    </Provider>;
const withItems =
    <Provider store={createStoryStore({items: appItems.map(item => ({...item, favourite: true}))})}>
        <FavouriteModal open onClose={action('onClose')} />
    </Provider>;

const withSearch =
    <Provider store={createStoryStore({
        items: appItems.map(item => ({...item, favourite: true})),
        favSearch: 'Lava'
    })}>
        <FavouriteModal open onClose={action('onClose')} />
    </Provider>;

export const withoutItemsMobile = withViewport()(withoutItems);
export const withItemsMobile = withViewport()(withItems);
export const withSearchMobile = withViewport()(withSearch);

export const withoutItemsDesktop = () => withoutItems;
export const withItemsDesktop = () => withItems;
export const withSearchDesktop = () => withSearch;
