

export function withViewport(viewport: string = 'mobile2'): Function {

    return element => {

        const callback = () => element;

        callback.story = {
            parameters: {
                viewport: {
                    defaultViewport: viewport
                }
            }
        };

        return callback;

    };

}
