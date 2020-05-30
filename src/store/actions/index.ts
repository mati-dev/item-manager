
import {Action, ActionCreator} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {ItemConsumer} from '../../util/ItemConsumer';
import {
    RETRIEVE_ITEMS, SET_FAVOURITE_SEARCH,
    SET_MAX_LOADED_DATA,
    SET_PRICE_RANGE,
    SET_SEARCH,
    SET_SORT,
    TOGGLE_FAVED
} from '../reducers';
import {AppState} from '../../model';
import {getMaxLoadedData} from '../selectors';


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

        const max = items.reduce((previous, current) => previous < current.price ? current.price : previous, 0);

        dispatch({
            type: RETRIEVE_ITEMS,
            payload: items
        });

        dispatch(setPriceRange([0, max]));

    };
};

export const setSearch: SimpleAction = (value: string) => {

    return {
        type: SET_SEARCH,
        payload: value
    };

};

export const setFavouriteSearch: SimpleAction = (value: string) => {

    return {
        type: SET_FAVOURITE_SEARCH,
        payload: value
    };

};

export const toggleFaved: SimpleAction = (id: number) => {

    return {
        type: TOGGLE_FAVED,
        payload: id
    };

};

export const setSort: SimpleAction = (key: string) => {
    return {
        type: SET_SORT,
        payload: key
    };
};

export const setPriceRange: SimpleAction = (values: [number, number]) => {
    return {
        type: SET_PRICE_RANGE,
        payload: values
    };
};

export const incrementMaxLoadedData: ComplexAction = () => {

    return async (dispatch, getState) => {

        const state = getState();
        const maxLoadedData = getMaxLoadedData(state);

        await new Promise(resolve => {
            setTimeout(() => {

                dispatch({
                    type: SET_MAX_LOADED_DATA,
                    payload: maxLoadedData + 5
                });

                resolve();

            }, 1000);
        });

    };

};
