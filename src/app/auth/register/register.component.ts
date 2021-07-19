import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { UserLoginModel } from 'src/app/models/users-login.model';
import { SweetAlertService } from 'src/app/service/sweetAlert.service';
import { Store } from '@ngrx/store';
import { GlobalState } from '../../app.reducer';
import { Subscription } from 'rxjs';
import * as ui from '../../shared/ui.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [SweetAlertService]
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerFrom!: FormGroup;
  private dataUser! : UserLoginModel;
  private mensajes = {
      msjExitoso: 'registro',
  }
  cargando: boolean = false;
  uiSubscription!: Subscription;
  constructor( private fb: FormBuilder,
    private authService: AuthService,
    @Inject(Router) private router: Router,
    private alertService: SweetAlertService,
    private store:Store<GlobalState>) { }

  ngOnInit(): void {
    this.InicializarForm();
    this.uiSubscription = this.store.select('ui').subscribe( ui => this.cargando = ui.isLoading);
  }

  ngOnDestroy() {
    this.uiSubscription.unsubscribe();
  }

  InicializarForm() {
    this.registerFrom = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  crearUsuario() {
    // this.alertService.Loading();
    if (this.registerFrom.invalid) {
      return;
    }
    this.store.dispatch( ui.isLoading() );

    this.dataUser = this.registerFrom.value;
    this.authService.CrearUsuario(this.dataUser).then( credential => {
      this.store.dispatch( ui.stopLoading() );
      this.alertService.minExitoso(this.mensajes.msjExitoso);
      this.router.navigate(['/']);

    })
    .catch( error => {
      this.store.dispatch( ui.stopLoading() );
      this.alertService.minError(error);
    })
  }

}
