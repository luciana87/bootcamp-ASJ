/*------------- SWITCH ---------------*/
// let num4 = parseInt(prompt('Ingrese un número'));
// switch (num4) {
//     case (num4 % 2 === 0):
//         alert(`El número ingresado ${num4} es par.`)
//         break;

//     default:
//         alert(`El número ingresado ${num4} es impar.`)
//         break;
// }


/*--------------------------------------------------------------------------- */
// let word = prompt('Ingrese una de las siguientes palabras: casa, perro, pelota, ábol, genio').toLowerCase();

// switch (word) {
//     case 'casa':
//         console.log('House.');

//         break;
//     case 'perro':
//         console.log('Dog.');

//         break;
//     case 'pelota':
//         console.log('Ball.');

//         break;
//     case 'arbol':
//         console.log('Tree.');

//         break;
//     case 'genio':
//         console.log('Genie.');

//         break;

//     default:
//         console.log('La palabra ingresada es incorrecta.');
//         break;
// }

/*--------------------------------------------------------------------------- */

// let calificacion = parseInt(prompt('Ingrese un valor para calificar la película:\n 1. Muy mala\n 2. Mala \n 3. Mediocre \n 4. Buena \n 5. Muy Buena'));

// switch (calificacion) {
//     case 1:
//         console.log('Calificaste la película como Muy mala. Lo lamentamos mucho.');

//         break;
//     case 2:
//         console.log('Calificaste la película como Mala. Lo lamentamos mucho.');

//         break;
//     case 3:
//         console.log('Calificaste la película como Mediocre. Está bien.');

//         break;
//     case 4:
//         console.log('Calificaste la película como Buena. Que bueno, nos alegra.');

//         break;
//     case 5:
//         console.log('Calificaste la película como Muy Buena. Nos encanta que la hayas disfrutado.');

//         break;

//     default:
//         console.log('Ingresaste un valor inválido.');
//         break;
// }

// if (calificacion >= 1 && calificacion <= 5) {
//     alert('Gracias por participar!')
// }



/*------------------------------------WHILE--------------------------------------- */


// function sumatoria2(num) {
//     let suma = 0;
//     let i = 1;
//     while (i <= num) {
//         suma += i++;
//     }
//     return suma;
// }

/*Sumatoria de Gauss  */

// function sumatoria(num) {
//     return num * ((num + 1) / 2);
// }

// function cacularPromedio(suma, cant) {
//     console.log(`El promedio es igual a ${(suma / cant).toFixed(2)}`);
// }


// let num5 = parseInt(prompt('Ingrese un número'));
// if (Number.isInteger(num5)) {
//     let suma2 = sumatoria2(num5);
//     alert(`La sumatoria de todos los números consecutivos hasta el número ${num5} es = ${suma2}`);
//     cacularPromedio(suma2, num5);

//     /*Sumatoria de Gauss  */
//     let suma = sumatoria(num5);
//     alert(`Usando la sumatoria de Gauss, la suma de todos los números consecutivos hasta el número ${num5} es = ${suma}`);
//     cacularPromedio(suma, num5);
// } else {
//     alert(`El valor ingresado no es un número entero`);
// }



/*--------------------------------------------------------------------------- */

/*En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. El programa terminará cuando se ingrese un número negativo.
Al terminar, mostrarle un mensaje con la cantidad de números positivos que ingresó.*/


// function contarPositivos() {
//     let num6 = parseInt(prompt('Ingrese un número'));
//     let cant = 0;
//     while (num6 >= 0) {
//         cant++;
//         num6 = parseInt(prompt('Ingrese un número'));
//     }
//     alert(`Se ingresaron ${cant} de números positivos.`);
// }

// contarPositivos();

/*--------------------------------------------------------------------------- */










