import { Component, OnInit, OnDestroy, Pipe } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';
import { ArrayPruebaOrden, IngresoEgresoModel } from '../../models/ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { IngresoEgresoService } from '../../service/ingreso-egreso.service';
import { SweetAlertService } from 'src/app/service/sweetAlert.service';

import {OrdenUsuariosPipe} from 'src/app/pipes/orden-usuario.pipe'
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ],
  providers: [SweetAlertService, OrdenUsuariosPipe]
})
export class DetalleComponent implements OnInit, OnDestroy {
  ingresosEgresosDetalle: IngresoEgresoModel[] = [];
  userPople = [
    { Nombre: '2. Francisco', Apellido: 'Blanco'}, { Nombre: '4. Juan', Apellido: 'Blanco'}, { Nombre: '3. Jaime', Apellido: 'Blanco'}, { Nombre: '1. Andres', Apellido: 'Blanco'}
  ]
  arrayNombres: ArrayPruebaOrden[] = [];
  ingresoEgresoSubs!: Subscription;
  private mensajes = {
    msjExitoso: 'registro',
}
  constructor(private store: Store<GlobalState>, private ingresoEgresoService: IngresoEgresoService, private alertService: SweetAlertService,
    private ordenPipe: OrdenUsuariosPipe)
  { this.arrayNombres = this.ordenPipe.transform(this.userPople)  }

  ngOnInit(): void {
   this.ingresoEgresoSubs = this.store.select('ingresosEgresos')
     .pipe(
        filter( ingresoEgreso => ingresoEgreso.items != null)
     )
    .subscribe( ({ items }) => {
      this.ingresosEgresosDetalle = items
    });


  }
  ngOnDestroy() {
      this.ingresoEgresoSubs.unsubscribe();
  }

  EliminarIngresoEgreso(uid: string) {
    this.ingresoEgresoService.EliminarIngresoEgresos(uid)
    .then( () =>
       this.alertService.minExitosoEliminar(this.mensajes.msjExitoso)
    )
    .catch( err =>  this.alertService.minError(err))
  }
}
