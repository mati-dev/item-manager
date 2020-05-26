
import React from 'react';

import {Header} from './index';
import {withViewport} from '../../../test/components';


export default {
    title: 'Header'
};

const basic = <Header/>;

export const basicMobile = withViewport()(basic);
export const basicDesktop = () => basic;
