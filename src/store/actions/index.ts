
import {Action, ActionCreator} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {ItemConsumer} from '../../util/ItemConsumer';
import {GET_ITEMS, SET_SEARCH} from '../reducers';
import {AppState} from '../../model';


// TODO: All this typings should be in an independent file
interface AppAction extends Action<string> {
    payload: unknown;
}

export type SyncAction = ActionCreator<AppAction>;
export type AsyncAction = ActionCreator<ThunkAction<void, AppState, void, AppAction>>;
export type AsyncDispatch = ThunkDispatch<AppState, void, AppAction>;

export const retrieveItems: AsyncAction = () => {
    return async dispatch => {

        const items = await new ItemConsumer().getItems();

        dispatch({
            type: GET_ITEMS,
            payload: items
        });

    };
};

export const setSearchValue: SyncAction = (value: string) => {

    return {
        type: SET_SEARCH,
        payload: value
    };

};
