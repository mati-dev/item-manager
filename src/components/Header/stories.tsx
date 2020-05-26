
import React from 'react';

import {Header} from './index';
import {withViewport} from '../../../test/src/components';


export default {
    title: 'Header'
};

const basic = <Header/>;

export const basicMobile = withViewport()(basic);
export const basicDesktop = () => basic;
