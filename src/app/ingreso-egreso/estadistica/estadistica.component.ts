import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';
import { IngresoEgresoModel } from '../../models/ingreso-egreso.model';
import { Label, MultiDataSet } from 'ng2-charts';
import { subscribeOn } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: [
  ]
})
export class EstadisticaComponent implements OnInit, OnDestroy {

  ingresoNum :number = 0;
  egresoNum: number = 0;

  totalIngresos: number = 0;
  totalEgresos: number = 0;

  public doughnutChartLabels: Label[] = ['Ingresos', 'Egreso', 'Total'];
  public doughnutChartData: MultiDataSet = [[]];

  estadisticaSubs!: Subscription;

  constructor(private store: Store<GlobalState>) {}

  ngOnInit(): void {
    this.estadisticaSubs = this.store.select('ingresosEgresos')
    .subscribe(({ items }) => this.generarEstadistica(items));
  }

  ngOnDestroy() {
    this.estadisticaSubs.unsubscribe();
  }
  contarIngresoEgreso () {

  }

  generarEstadistica(items: IngresoEgresoModel[]) {
    this.totalEgresos = 0;
    this.totalIngresos = 0;
    this.ingresoNum = 0;
    this.egresoNum = 0;
    for (const item of items) {
      if (item.tipo === 'ingreso') {
        this.totalIngresos += item.monto;
        this.ingresoNum++;
      } else {
        this.totalEgresos += item.monto;
        this.egresoNum++;
      }
    }

    this.doughnutChartData = [[this.totalIngresos, this.totalEgresos]];

  }

}
