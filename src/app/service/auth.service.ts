import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }


  CrearUsuario(nombre: string, email:string, password: string) {
    // console.log('Desde el servicio', {nombre, email, password});
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

}
