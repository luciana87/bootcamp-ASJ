import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe' //como lo voy a llamar cuando lo use como currency, etc.
})
export class MiPipePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if (args != null) {
      if (args == 'ingles') {
        return 'Hello';
      } else if (args == 'italiano')
        return 'ciao';
    } else if (args == 'aleman') {
      return 'Hallo';
    } else {
      return value.toUppercase;
    }
  }
  // return value + '[(Creado por nuestro pipe]';
}

