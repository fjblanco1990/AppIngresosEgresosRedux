import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RouterModule } from '@angular/router';
import { OrdenIngresoPipe } from '../pipes/orden-ingreso.pipe';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OrdenUsuariosPipe } from '../pipes/orden-usuario.pipe';
import { UppercasePipe } from '../pipes/uppercase.pipe';
import { OrdenParametersPipe } from '../pipes/ordenParameters.pipe';
import { TestComponent } from '../ComponentTest/test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutesModule } from '../dashboard/dashboard-routes.module';
import { StoreModule } from '@ngrx/store';
import { ingresoEgresoReducer } from './ingreso-egreso.reducer';



@NgModule({
  declarations: [
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    DashboardComponent,
    OrdenIngresoPipe,
    OrdenUsuariosPipe,
    UppercasePipe,
    OrdenParametersPipe,
    TestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    DashboardRoutesModule,
    //para cargar los store con lazyload
    StoreModule.forFeature( 'ingresosEgresos',ingresoEgresoReducer)

  ],
  exports: []
})
export class IngresoEgresoModule { }
