import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'Upper'
})
export class UppercasePipe implements PipeTransform {

    transform(value: string): string {
        if (!value) return '';
        return value.toUpperCase();
    }

}
