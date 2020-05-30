
import React from 'react';
import {Provider} from 'react-redux';

import {PriceSlider} from './index';
import {ComponentWrapper, withViewport} from '../../../test/src/components';
import {createStoryStore} from '../../../test/src/stories';
import {appItems} from '../../../test/src/resources/appItems';


export default {
    title: 'PriceSlider',
    decorators: [
        story => <ComponentWrapper verticalCenter>{story()}</ComponentWrapper>,
        story => <Provider store={createStoryStore({
            items: appItems,
            priceRange: [0, 2000]
        })}>{story()}</Provider>
    ]
};


const basic = <PriceSlider />;

export const basicMobile = withViewport()(basic);

export const basicDesktop = () => basic;
