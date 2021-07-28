import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';
import { IngresoEgresoModel } from '../../models/ingreso-egreso.model';
import { Usuario } from '../../models/user.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  mostrarIngresos: IngresoEgresoModel [] = [];
  mostrarInfoUser!:  Usuario | null;
  MostrarLoading: boolean = false;
  constructor(private store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.store.select('ingresosEgresos')
    .subscribe(
      ({ items }) => {
        this.mostrarIngresos = items,
        console.log(items);
      }
    );

    this.store.select('user')
    .subscribe(
      ({ user }) => {
        this.mostrarInfoUser  = user;
         console.log( user );
      }
    );

    this.store.select('ui')
    .subscribe(
      ({ isLoading }) => { this.MostrarLoading = isLoading, console.log( isLoading ); }
    )

  }

}
