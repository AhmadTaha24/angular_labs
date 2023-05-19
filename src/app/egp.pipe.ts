import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egp'
})
export class EgpPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    
    return value.toString() + ' EGP';
  }

}
