import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nrosPrimos'
})
export class NrosPrimosPipe implements PipeTransform {

  transform(numeros: number[] | null) :number[] {
    
    if (numeros != null) {
      return [];
    }

    const primos: number[]= [];

    primos.forEach(num => {
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
    
  //   for (let i = 2; i <= num; i++) {
  //     if (num % i === 0) {
  //       return false;
  //     }
  //   }
  //   return true;
  }
}
