import { ActionReducerMap } from '@ngrx/store';
import * as ui from './shared/ui.reducer';
import * as auth from './auth/auth.reducer';
import * as ingresosEgreso from './ingreso-egreso/ingreso-egreso.reducer';

export interface GlobalState {
   ui: ui.State,
   user: auth.State,
   // ingresosEgresos: ingresosEgreso.State
}



export const appReducers: ActionReducerMap<GlobalState> = {
   ui: ui.uiReducer,
   user: auth.authReducer,
   // ingresosEgresos: ingresosEgreso.ingresoEgresoReducer
}