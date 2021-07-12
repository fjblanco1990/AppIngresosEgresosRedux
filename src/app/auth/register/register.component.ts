import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, Routes } from '@angular/router';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerFrom!: FormGroup;
  constructor( private fb: FormBuilder, private authService: AuthService, @Inject(Router) private router: Router) { }

  ngOnInit(): void {
    this.registerFrom = this.fb.group({
          nombre: ['', Validators.required],
          correo: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
    })
  }

  crearUsuario() {
    if (this.registerFrom.invalid) {
      return;
    } 
    const { nombre, correo, password } = this.registerFrom.value;
    this.authService.CrearUsuario(nombre, correo, password).then( credential => {
      this.router.navigate(['/']);
      
    })
    .catch( error => {
      console.error(error);
      
    })
  }

}
