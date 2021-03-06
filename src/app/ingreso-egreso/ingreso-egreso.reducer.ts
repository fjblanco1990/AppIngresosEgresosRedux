import { createReducer, on } from '@ngrx/store';
import * as actions from './ingreso-egreso.actions';
import { IngresoEgresoModel } from '../models/ingreso-egreso.model';
import { GlobalState } from '../app.reducer';

export interface State {
    items: IngresoEgresoModel[];
}

export interface AppStateWhitIngresoEgreso extends GlobalState {
    ingresosEgresos: State
}

export const initialState: State = {
   items: [],
}

const _ingresoEgresoReducer = createReducer(initialState,

    on(actions.setItems, (state, { items }) => ({ ...state, items: [...items] })),
    on(actions.unSetItems, (state) => ({ ...state, items: [] })),

);

export function ingresoEgresoReducer (state: any, action: any) {
    return _ingresoEgresoReducer(state, action);
}