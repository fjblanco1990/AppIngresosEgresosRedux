import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';
import { IngresoEgresoModel } from '../../models/ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as actionIngresoEgreso from '../ingreso-egreso.actions'
import { IngresoEgresoService } from '../../service/ingreso-egreso.service';
import { SweetAlertService } from 'src/app/service/sweetAlert.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ],
  providers: [SweetAlertService]
})
export class DetalleComponent implements OnInit, OnDestroy {
  ingresosEgresosDetalle: IngresoEgresoModel[] = [];
  ingresoEgresoSubs!: Subscription;
  private mensajes = {
    msjExitoso: 'registro',
}
  constructor(private store: Store<GlobalState>, private ingresoEgresoService: IngresoEgresoService, private alertService: SweetAlertService) { }

  ngOnInit(): void {
   this.ingresoEgresoSubs = this.store.select('ingresosEgresos')
     .pipe(
        filter( ingresoEgreso => ingresoEgreso.items != null)
     )
    .subscribe( ({ items }) => {
      this.ingresosEgresosDetalle = items
    })
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
