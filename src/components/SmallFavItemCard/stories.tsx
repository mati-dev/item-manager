
import React from 'react';
import {Provider} from 'react-redux';

import {SmallFavItemCard} from './index';
import {ComponentWrapper, withViewport} from '../../../test/src/components';
import {createStoryStore} from '../../../test/src/stories';
import {appItem} from '../../../test/src/resources';


export default {
    title: 'SmallFavItemCard',
    decorators: [
        story => <ComponentWrapper>{story()}</ComponentWrapper>,
        story => <Provider store={createStoryStore()}>{story()}</Provider>
    ]
};


const basic = <SmallFavItemCard item={appItem}/>;
const faved = <SmallFavItemCard item={{...appItem, favourite: true}}/>;

export const basicMobile = withViewport()(basic);
export const favedMobile = withViewport()(faved);

export const basicDesktop = () => basic;
export const favedDesktop = () => faved;
