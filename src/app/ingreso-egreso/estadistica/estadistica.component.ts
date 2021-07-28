import { Component, OnInit } from '@angular/core';
import { stopLoading } from '../../shared/ui.actions';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';
import { IngresoEgresoModel } from '../../models/ingreso-egreso.model';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: [
  ]
})
export class EstadisticaComponent implements OnInit {

  ingresoNum :number = 0;
  egresoNum: number = 0;

  totalIngresos: number = 0;
  totalEgresos: number = 0;

  constructor(private store: Store<GlobalState>) {

   }

  ngOnInit(): void {
    this.store.select('ingresosEgresos')
    .subscribe(({ items }) => this.generarEstadistica(items));
  }

  contarIngresoEgreso () {

  }

  generarEstadistica(items: IngresoEgresoModel[]) {
    for (const item of items) {
      // item.tipo === 'ingreso'? this.totalIngresos += item.monto: this.ingresoNum++ ? this.totalEgresos += item.monto : this.egresoNum++;
      // if (item.tipo === 'ingreso') {
      //   this.totalIngresos += item.monto;
      //   this.ingresoNum++;
      // } else {
      //   this.totalEgresos += item.monto;
      //   this.egresoNum++;
      // }
    }

  }

}
