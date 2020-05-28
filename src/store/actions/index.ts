
import {Action, ActionCreator} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {ItemConsumer} from '../../util/ItemConsumer';
import {GET_ITEMS, SET_SEARCH, SET_SORT, TOGGLE_FAVED} from '../reducers';
import {AppState} from '../../model';
import {getSort} from '../selectors';


// TODO: All this typings should be in an independent file
interface AppAction extends Action<string> {
    payload: unknown;
}

export type SimpleAction = ActionCreator<AppAction>;
export type ComplexAction = ActionCreator<ThunkAction<void, AppState, void, AppAction>>;
export type AppDispatch = ThunkDispatch<AppState, void, AppAction>;

export const retrieveItems: ComplexAction = () => {
    return async dispatch => {

        const items = await new ItemConsumer().getItems();

        dispatch({
            type: GET_ITEMS,
            payload: items
        });

    };
};

export const setSearchValue: SimpleAction = (value: string) => {

    return {
        type: SET_SEARCH,
        payload: value
    };

};

export const toggleFaved: SimpleAction = (id: number) => {

    return {
        type: TOGGLE_FAVED,
        payload: id
    };

};

export const setSort: ComplexAction = (key: string) => {

    return (dispatch, getState) => {

        const state = getState();
        const sort = getSort(state);
        const isDesc = sort.startsWith('-');
        const sortKey = sort.replace('-', '');

        dispatch({
            type: SET_SORT,
            payload: sortKey !== key
                ? key
                : isDesc
                    ? ''
                    : `-${key}`
        });

    };

};
