import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserLoginModel } from '../models/users-login.model';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, public fireStore: AngularFirestore) { }

  //Metodo se encarga de avisarnos cuando haya algun cambio con la autenticacion o cuando se cierra sesion , valida cuando no esta autenticado
  InitAuhtListener() {
    this.auth.authState.subscribe( fUser => {
      console.log(fUser);
    })
  }

  CrearUsuario(dataUser: UserLoginModel) {  
    // console.log('Desde el servicio', {nombre, email, password});
    return this.auth.createUserWithEmailAndPassword(dataUser.correo, dataUser.password)
    // en la promesa del createUser realiza una desestrcuturacion y se puede acceder a ciertas propiedades
      .then( ({ user }) => {
         //asigna a una constante un objeto con sus datos.
          const newUser = new Usuario( user?.uid, dataUser.nombre, dataUser.correo );
          //utilizando bactis de fireBase pero se debe hacer una desestructuracion de la constate o se puede hacer asi 
          // return this.fireStore.doc(`${ user?.uid }/usuario`).set( { uid: newUser.uid, nombre: newUser.nombre, correo: newUser.correo });
           return this.fireStore.doc(`${ user?.uid }/usuario`).set( {...newUser});
      });
  }

  LoginUsuario(dataUser: UserLoginModel) {
    return this.auth.signInWithEmailAndPassword(dataUser.correo, dataUser.password);
  }

  Logout() {
    return this.auth.signOut();
  }

  isAuth() {
    return this.auth.authState.pipe(
      map( fbUser => fbUser != null )
     );
  }
}
