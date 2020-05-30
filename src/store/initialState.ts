
import {AppState} from '../model';


export const initialState: AppState = {
    items: [],
    search: '',
    favSearch: '',
    sort: '',
    maxLoadedData: 5,
    priceRange: [0, Infinity]
};
