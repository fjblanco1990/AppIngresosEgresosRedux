import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IngresoEgresoModel } from '../models/ingreso-egreso.model';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  constructor(private fireStore: AngularFirestore, private authService: AuthService) { }

  crearIngresoEgreso(ingresoEgreso: IngresoEgresoModel) {
    return this.fireStore.doc(`${ this.authService.user.uid }/ingreso-egreso`)
    .collection('items')
    .add({ ...ingresoEgreso })
  }
  //Comentario des de Golden

  //para estar pendiente de lo que suceda
  initIngresoEgresoListener(uid?: string) {
      return this.fireStore.collection(`${uid}/ingreso-egreso/items`).snapshotChanges()
      .pipe(
        map( snapShot =>  // sirve para retornar lo que venga en sanpshotpara barrer cada uno de los elementos y retorna lo que se ponga en el return
            snapShot.map( doc => ({
             // si se pone las llaves se puede quitar el return
              uid: doc.payload.doc.id,
              ...doc.payload.doc.data() as any // destrcuturacion
            })
          )
        )
      )
  }

  EliminarIngresoEgresos(uidItem: string) {
      return this.fireStore.doc(`${ this.authService.user.uid }/ingreso-egreso/items/${ uidItem }`).delete();
  }

}
