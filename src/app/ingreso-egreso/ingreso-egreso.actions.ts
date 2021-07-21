import { createAction, props } from '@ngrx/store';
import { IngresoEgresoModel } from '../models/ingreso-egreso.model';

export const setItems = createAction('[IngresoEgreso] setItems', props<{items: IngresoEgresoModel[]}>());
export const unSetItems = createAction('[IngresoEgreso] unSetItems');