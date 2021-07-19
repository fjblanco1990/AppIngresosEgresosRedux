import { createReducer, on, props } from '@ngrx/store';
import * as actions from './auth.actions';
import { Usuario } from '../models/user.model';

export interface State {
    user: Usuario | null;
}

export const initialState: State = {
   user: null,
}

const _authReducer = createReducer(initialState,

    on(actions.setUser, (state, {user}) => ({ ...state, user: {...user}})),
    on(actions.unSetUser, state => ({ ...state, user: null })),
);

export function authReducer(state: any, action: any) {
    return _authReducer(state, action);
}