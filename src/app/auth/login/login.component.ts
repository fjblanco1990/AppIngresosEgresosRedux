import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserLoginModel } from 'src/app/models/users-login.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/service/sweetAlert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers:[SweetAlertService]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  private dataUser! : UserLoginModel;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private alertService: SweetAlertService) { }

  ngOnInit(): void {
    this.inicilizationForm();
  }

  inicilizationForm() {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginUsuario() {
    this.alertService.Loading();
    if (this.loginForm.invalid) {
      return;
    } else {
    this.dataUser = this.loginForm.value;
    this.authService.LoginUsuario(this.dataUser).then( login => {
      this.alertService.OffSeewtAlert();
      this.router.navigate(['/']);
      }).catch( error => {
         this.alertService.minError(error);
      });
    }
  }



}
