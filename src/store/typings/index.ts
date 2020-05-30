
import {Action, ActionCreator} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {AppState} from '../../model';


export interface AppAction extends Action<string> {
    payload: unknown;
}

export type SimpleAction = ActionCreator<AppAction>;
export type ComplexAction = ActionCreator<ThunkAction<void, AppState, void, AppAction>>;
export type AppDispatch = ThunkDispatch<AppState, void, AppAction>;
