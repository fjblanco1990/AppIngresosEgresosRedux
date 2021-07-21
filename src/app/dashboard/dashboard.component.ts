import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { GlobalState } from '../app.reducer';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../service/ingreso-egreso.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  userSubs!: Subscription;
  constructor(private Store: Store<GlobalState>,private ingresoEgresoService: IngresoEgresoService) { }

  ngOnInit(): void {
   this.userSubs = this.Store.select('user')
    .pipe(
      filter( auth => auth.user != null)
      ).subscribe( ({ user }) => {
        this.ingresoEgresoService.initIngresoEgresoListener(user?.uid);
    })
  }

  ngOnDestroy() {
    this.userSubs.unsubscribe();
  }

}
