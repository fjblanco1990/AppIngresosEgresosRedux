import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerFrom!: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerFrom = this.fb.group({
          nombre: ['', Validators.required],
          correo: ['', Validators.required, Validators.email],
          password: ['', Validators.required]
    })
  }

  crearUsuario() {
    this.registerFrom.controls
  }

}
