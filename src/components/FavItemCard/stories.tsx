
import React from 'react';
import {Provider} from 'react-redux';

import {FavItemCard} from './index';

import {appItem} from '../../../test/src/resources';
import {withViewport, ComponentWrapper} from '../../../test/src/components';
import {createStoryStore} from '../../../test/src/stories';


export default {
    title: 'FavItemCard',
    decorators: [
        story => <ComponentWrapper>{story()}</ComponentWrapper>,
        story => <Provider store={createStoryStore()}>{story()}</Provider>
    ]
};

const basic = <FavItemCard item={appItem}/>;
const faved = <FavItemCard item={{...appItem, favourite: true}}/>;

export const basicMobile = withViewport()(basic);
export const favedMobile = withViewport()(faved);

export const basicDesktop = () => (basic);
export const favedDesktop = () => (faved);
