

describe('App', () => {

    test('Visual stories', async () => {

        await page.goto('http://localhost:9009/iframe.html?selectedKind=App&selectedStory=basic');

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();

    });

});
