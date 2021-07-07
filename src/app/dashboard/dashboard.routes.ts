import { Routes } from "@angular/router";
import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { DetalleComponent } from '../ingreso-egreso/detalle/detalle.component';

export const dashboardRoutes: Routes = [
    //lleva a la pagina principal dentro del dash
    { path: '', component: EstadisticaComponent},
    { path: 'ingreso-egreso', component: IngresoEgresoComponent},
    { path: 'detalle', component: DetalleComponent}
];

