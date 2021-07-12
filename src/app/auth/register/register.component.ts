import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, Routes } from '@angular/router';
import { inject } from '@angular/core/testing';
import { UserLoginModel } from 'src/app/models/users-login.model';
import { SweetAlertService } from 'src/app/service/sweetAlert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [SweetAlertService]
})
export class RegisterComponent implements OnInit {

  registerFrom!: FormGroup;
  private dataUser! : UserLoginModel;
  private mensajes = {
      msjExitoso: 'registro',
  }
  constructor( private fb: FormBuilder, private authService: AuthService, @Inject(Router) private router: Router, private alertService: SweetAlertService) { }

  ngOnInit(): void {
    this.InicializarForm();
  }

  InicializarForm() {
    this.registerFrom = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  crearUsuario() {
    this.alertService.Loading();
    if (this.registerFrom.invalid) {
      return;
    } 
    this.dataUser = this.registerFrom.value;
    this.authService.CrearUsuario(this.dataUser).then( credential => {
      this.alertService.minExitoso(this.mensajes.msjExitoso);
      this.router.navigate(['/']);
      
    })
    .catch( error => {
      this.alertService.minError(error);      
    })
  }

}
