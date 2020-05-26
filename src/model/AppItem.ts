
import {Item} from './Item';


export interface AppItem extends Item {
    id: number;
    favourite?: boolean;
}
