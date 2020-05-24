
import path from 'path';
import each from 'jest-each';
import {paramCase} from 'param-case';


export class StoryTestSet {

    public launchStoryTests(dir: string, fileName: string = 'stories'): void {

        const {default: def, ...other} = require(path.join(dir, fileName));

        const cases = Object.keys(other).map(c => [c]);

        describe(`Story Test - ${def.title}`, () => {
            each(cases).test('%s', async c => {
                expect(await StoryTestSet.getImage(def.title, c)).toMatchImageSnapshot({
                    customSnapshotIdentifier: () => `${def.title.replace('/', '-')}_${c}`
                });
            });
        });

    }

    private static async getImage(title: string, sample: string): Promise<string> {

        const isMobile = sample.endsWith('Mobile');
        const page = await browser.newPage();

        await page.setViewport(isMobile ? {height: 896, width: 414} : {height: 1112, width: 834});

        await page.goto(`http://localhost:9009/iframe.html?selectedKind=${title}&selectedStory=${paramCase(sample)}`,
            {waitUntil: 'networkidle2'});

        const shot = await page.screenshot();

        await page.close();

        return shot;

    }

}
