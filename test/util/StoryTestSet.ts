
import path from 'path';
import each from 'jest-each';


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

        await page.goto(`http://localhost:9009/iframe.html?selectedKind=${title}&selectedStory=${sample}`);

        return page.screenshot();

    }

}
