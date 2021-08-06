import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserLoginModel } from 'src/app/models/users-login.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/service/sweetAlert.service';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';
import * as ui from '../../shared/ui.actions';
import { stopLoading } from '../../shared/ui.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers:[SweetAlertService]
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  cargando: boolean = false;
  private dataUser! : UserLoginModel;
  uiSubscriptions!: Subscription;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: SweetAlertService,
    private store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.inicilizationForm();
    this.uiSubscriptions = this.store.select('ui').subscribe( ui => {
       this.cargando = ui.isLoading;
    });
  }

  ngOnDestroy() {
    this.uiSubscriptions.unsubscribe();
  }

  inicilizationForm() {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginUsuario() {
    // this.alertService.Loading();
    if (this.loginForm.invalid) {
      return;
    } else {

    this.store.dispatch( ui.isLoading() );

    this.dataUser = this.loginForm.value;
    this.authService.LoginUsuario(this.dataUser).then( login => {

      // this.alertService.OffSeewtAlert();
      this.store.dispatch( ui.stopLoading() );
      this.router.navigate(['/']);

      }).catch( error => {
         this.store.dispatch( ui.stopLoading() );
         this.alertService.minError(error);
      });
    }
  }



}
