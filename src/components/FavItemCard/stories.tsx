
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
const modal = <div style={{height: 200, width: 200}}><FavItemCard item={{...appItem, favourite: true}} favs /></div>;

export const basicMobile = withViewport()(basic);
export const favedMobile = withViewport()(faved);
export const modalMobile = withViewport()(modal);

export const basicDesktop = () => (basic);
export const favedDesktop = () => (faved);
export const modalDesktop = () => (modal);
