import { Pipe, PipeTransform } from '@angular/core';
import { ArrayPruebaOrden } from '../models/ingreso-egreso.model';
import * as _ from 'underscore';

@Pipe({
  name: 'ordenAlfabetico'
})
export class OrdenUsuariosPipe implements PipeTransform {

  transform(items: Array<ArrayPruebaOrden>):  Array<ArrayPruebaOrden> {
    if (!items) return [];
    return _.sortBy(items, function(items){return items.Nombre});
  }

}


//para convertir algo a mayuscula
// transform(value: string): string {
//     if (!value) return [];
//     return value.toUpperCase();
// }

//ordenar alfabeticamente
// 1. Instalar underscore asi : npm install underscore --save
// 2. Instalar asi: npm install @types/underscore --save
// 3. Agregar en el type del archivo tsconfig.app.json  esto: "underscore"