import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'ordenParameters'
})
export class OrdenParametersPipe implements PipeTransform {

    transform(value: Array<any>, reverse: boolean): Array<any> {
        if (!value) return [];
        if (reverse) {
            return _.sortBy(value, function(items){return items.Nombre}).reverse();
        } else {
            return _.sortBy(value, function(items){return items.Nombre});
        }
    }

}
