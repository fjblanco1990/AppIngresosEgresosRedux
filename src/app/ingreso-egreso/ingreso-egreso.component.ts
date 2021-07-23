import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngresoEgresoModel } from '../models/ingreso-egreso.model';
import { IngresoEgresoService } from '../service/ingreso-egreso.service';
import { SweetAlertService } from '../service/sweetAlert.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { GlobalState } from '../app.reducer';
import * as ui from '../shared/ui.actions';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: [],
  providers: [IngresoEgresoService, SweetAlertService]
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {
  //para manejo de formularios reactivos
  ingresoEgresoForm!: FormGroup;
  tipo: string = 'ingreso';
  uiSusbcription!: Subscription;
  cargando: boolean = false;
  constructor(private fb: FormBuilder,
    private ingresoEgresoService: IngresoEgresoService,
    private sweetAlertService: SweetAlertService,
    private store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.ingresoEgresoForm = this.fb.group({
      descripcion: ['', Validators.required],
      monto: ['', Validators.required],
    });
    this.uiSusbcription = this.store.select('ui').subscribe( ui => this.cargando = ui.isLoading);
  }

  ngOnDestroy() {
    this.uiSusbcription.unsubscribe();
  }

  guardarIngresoEgreso() {
    this.store.dispatch( ui.isLoading() );
    if (this.ingresoEgresoForm.valid) {
      const { descripcion, monto } = this.ingresoEgresoForm.value;
      const ingresoEgreso = new IngresoEgresoModel(descripcion, monto, this.tipo, '');
      this.ingresoEgresoService.crearIngresoEgreso(ingresoEgreso)
         .then( () => {
           this.store.dispatch(ui.stopLoading());
           this.sweetAlertService.ExitosoTitle('Registro creado', descripcion);
           this.ingresoEgresoForm.reset();
         })
         .catch( err => {
           this.sweetAlertService.Error(err.message),
           this.store.dispatch(ui.stopLoading())
        });
    } else { return; }
  }




}
