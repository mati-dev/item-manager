
import {StoryTestSet} from '../../../test/util';


describe('App', () => {

    new StoryTestSet().launchStoryTests(__dirname);

    describe('Other tests', () => {

        test('Test', () => {
            expect(true).toBeTruthy();
        });

    });

});
