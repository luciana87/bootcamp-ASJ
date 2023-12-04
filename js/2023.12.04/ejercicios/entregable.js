/*En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, 
teniendo en cuenta estos criterios:

Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
Si es múltiplo de 5, deberá imprimir "Buzz".
Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".*/

// function mostrarFizzBuzz() {
//     let num = 1;
//     while (num <= 100 && num >= 1) {

//         if (num % 3 === 0) {
//             console.log(`${num} Fizz`);
//         } if (num % 5 === 0) {
//             console.log(`${num} Buzz`);
//         } if ((num % 5 === 0) && (num % 3 === 0)) {
//             console.log(` ${num} FizzBuzz`);
//         }
// switch (num) {
//     case (num % 3 === 0):
//         console.log("Fizz");
//         break;
//     case (num % 5 === 0):
//         console.log("Buzz");
//         break;
//     case ((num % 5 === 0) && (num % 3 === 0)):
//         console.log("FizzBuzz");
//         break;
// }
//         num++;
//     }
// }

// mostrarFizzBuzz();



/*----------------------------------------------------------------------------------------*/
let choice;
let total = 0;
do {
    choice = parseInt(prompt(`¡Hola bienvenid@!\n A continuación se detallan las ocpiones disponibles, ingrese un valor:
\n1. Ver la carta.
\n2. Escuchar un chiste.
\n3. Pedir la cuenta.
\n4. Salir.`));

    switch (choice) {
        case 1:
            let producto = parseInt(prompt(`Ingrese el número del producto que desea consumir:
                \n1. Café --- $550.
                \n2. Tostado --- $2340.
                \n3. Fruta --- $1750.
                \n4. Gaseosa --- $800.`));

            switch (producto) {
                case 1:
                    total += 550;
                    alert("Usted seleccionó un café.")
                    break;
                case 2:
                    total += 2340;
                    alert("Usted seleccionó un Tostado.")
                    break;
                case 3:
                    total += 1750;
                    alert("Usted seleccionó Fruta.")
                    break;
                case 4:
                    total += 800;
                    alert("Usted seleccionó una Gaseosa.")
                    break;
                default:
                    alert(`Opción inválida, intente nuevamente.`)
                    break;
            };

            break;
        case 2:
            alert('¿Por qué la escoba es feliz todos los días? - Porque siempre ba-rriendo xD');
            break;
        case 3:
            let respuesta = prompt(`Usted solicitó la cuenta. El total es de $${total.toFixed()}, desea dejar propina? Se calcula un 10% de propina s/n`);
            if (respuesta === "s") {
                total = (total * 1.1).toFixed();
            }
            
            let respuesta2;
            do {
                respuesta2 = prompt(`El monto final a abonar es $${total}, desea abonarlo? s/n`);
                if (respuesta2 === "s") {
                    alert("¡Muchas gracias por su compra y por elegirnos!");
                    choice = 4;
                } else {
                    alert("¡No puede retirarse sin abonar lo consumido!")
                }
            } while (respuesta2 != "s");
            
            break;

        case 4:
            alert('¡Gracias por elegirnos!');
            break;
    }

} while (choice != 4);
