
import {applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {AppState} from '../../../src/model';
import {rootReducer} from '../../../src/store/reducers';
import {initialState} from '../../../src/store/initialState';


export function createStoryStore(changes: Partial<AppState> = {}): Store {

    return createStore(
        rootReducer,
        {
            ...initialState,
            ...changes
        },
        composeWithDevTools(applyMiddleware(thunk))
    );

}
