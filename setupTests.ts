
import {toMatchImageSnapshot} from 'jest-image-snapshot';

jest.setTimeout(50000);

expect.extend({toMatchImageSnapshot});
