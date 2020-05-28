
import {DefaultRootState} from 'react-redux';

import {AppItem} from './AppItem';

// This will allow to use connect without specifying the AppState
declare module 'react-redux' {
    // tslint:disable-next-line:no-empty-interface
    interface DefaultRootState extends AppState {}
}


export interface AppState {
    items: AppItem[];
    search: string;
    sort: string;
}
