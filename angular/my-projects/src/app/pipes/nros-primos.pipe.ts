import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nrosPrimos'
})
export class NrosPrimosPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    
    const primos: number[]= [];

    if (value === null) {
      return [];
    }

    value.forEach((num: number) => {
      if (this.esPrimo(num)) {
        primos.push(num);
      }
    });
    
    return primos;
  }



  private esPrimo (num: number): boolean{
    if (num <= 1) {
      return false;
    } else {

    }
    let i = 2;
    while (i * i <= num) {
      if (num % i === 0) {
        return false;        
      }
      i++;
    }
    return true;
  }
}
