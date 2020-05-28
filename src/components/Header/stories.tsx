
import React from 'react';
import {action} from '@storybook/addon-actions';

import {Header} from './index';
import {withViewport} from '../../../test/src/components';


export default {
    title: 'Header'
};

const basic = <Header onFavClick={action('onClick')}/>;

export const basicMobile = withViewport()(basic);
export const basicDesktop = () => basic;
