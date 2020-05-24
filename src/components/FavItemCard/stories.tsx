
import React from 'react';

import {FavItemCard} from './index';

import {favItem} from '../../../test/resources/favItem';
import {ComponentWrapper} from '../../../test/components/ComponentWrapper';
import {withViewport} from '../../../test/components';


export default {
    title: 'FavItemCard',
    decorators: [
        story => <ComponentWrapper>{story()}</ComponentWrapper>
    ]
};

const basic = <FavItemCard item={favItem}/>;
const faved = <FavItemCard item={{...favItem, favourite: true}}/>;

export const basicMobile = withViewport()(basic);
export const basicDesktop = () => (basic);

export const favedMobile = withViewport()(faved);
export const favedDesktop = () => (faved);
