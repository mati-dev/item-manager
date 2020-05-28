
import axios from 'axios';

import {AppItem, Item} from '../../model';


// Implemented a consumer because "future versions of the app" would probably have more complex communications
// than this one. I was thinking about saving the items in the instance and return them in case they existed but
// I ended up removing it as this consumer right now is only used once in the whole app lifecycle

export class ItemConsumer {

    private static ITEMS_URL: string = 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/items.json';

    public async getItems(): Promise<AppItem[]> {

        const response = await axios.get<{items: Item[]}>(ItemConsumer.ITEMS_URL);

        return response.data.items.map((item, index) => ({...item, id: index}));

    }

}
