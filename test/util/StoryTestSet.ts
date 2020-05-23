
import path from 'path';
import {Page} from 'puppeteer';
import each from 'jest-each';


/**
 * Utility so we can run story tests in parallel
 */
export class StoryTestSet {

    private page: Page;

    public launchStoryTests(dir: string, fileName: string = 'stories'): void {

        const {default: def, ...other} = require(path.join(dir, fileName));

        const cases = Object.keys(other).map(c => [c]);

        describe(`Story Test - ${def.title}`, () => {
            each(cases).test('%s', async c => {
                expect(await this.getImage(def.title, c)).toMatchImageSnapshot({
                    customSnapshotIdentifier: () => `${def.title.replace('/', '-')}_${c}`
                });
            });
        });

    }

    private async getImage(title: string, sample: string): Promise<string> {

        if(!this.page) {
            this.page = await browser.newPage();
        }

        await this.page.goto(`http://localhost:9009/iframe.html?selectedKind=${title}&selectedStory=${sample}`);

        return this.page.screenshot();

    }

}
