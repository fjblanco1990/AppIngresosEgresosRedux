import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';
import { IngresoEgresoModel } from '../../models/ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as actionIngresoEgreso from '../ingreso-egreso.actions'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ]
})
export class DetalleComponent implements OnInit, OnDestroy {
  ingresosEgresosDetalle: IngresoEgresoModel[] = [];
  ingresoEgresoSubs!: Subscription;
  constructor(private store: Store<GlobalState>) { }

  ngOnInit(): void {
   this.ingresoEgresoSubs = this.store.select('ingresosEgresos')
     .pipe(
        filter( ingresoEgreso => ingresoEgreso.items != null)
     )
    .subscribe( ({ items }) => {
      this.ingresosEgresosDetalle = items
    })
  }

  EliminarIngresoEgreso(uid: string) {
      this.store.dispatch(actionIngresoEgreso.unSetItems())
  }

  ngOnDestroy() {
      this.ingresoEgresoSubs.unsubscribe();
  }

}
