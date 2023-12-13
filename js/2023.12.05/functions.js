// function mostrarCarta() {
//     let producto = parseInt(prompt(`Ingrese el número del producto que desea consumir:
//     \n1. Café --- $550.
//     \n2. Tostado --- $2340.
//     \n3. Fruta --- $1750.
//     \n4. Gaseosa --- $800.`));

//     let productos = ["Café", "Tostado", "Fruta", "Gaseosa"];

//     switch (producto) {
//         case 1:
//             calcularMonto(550, productos[0]);
//             break;
//         case 2:
//             calcularMonto(2340, productos[1]);
//             break;
//         case 3:
//             calcularMonto(1750, productos[2]);
//             break;
//         case 4:
//             calcularMonto(800, productos[3]);
//             break;
//         default:
//             alert(`Opción inválida, intente nuevamente.`)
//             break;
//     };
// }

// function calcularMonto(monto, producto) {
//     total += monto;
//     alert(`Usted seleccionó un ${producto}.`)
// }

// function contarChistes() {
//     alert('¿Por qué la escoba es feliz todos los días? - Porque siempre ba-rriendo xD');
// }

// function pagar(monto) {
//     let respuesta2;
//     do {
//         respuesta2 = prompt(`El monto final a abonar es $${monto}, desea abonarlo? s/n`);
//         if (respuesta2 === "s") {
//             alert("¡Muchas gracias por su compra y por elegirnos!");
//             choice = 4;
//         } else {
//             alert("¡No puede retirarse sin abonar lo consumido!")
//         }
//     } while (respuesta2 != "s");
// }

// function pedirCuenta() {
//     let respuesta = prompt(`Usted solicitó la cuenta. El total es de $${total.toFixed()}, desea dejar propina? Se calcula un 10% de propina s/n`);
//     if (respuesta === "s") {
//         total = (total * 1.1).toFixed();
//     }
//     pagar(total);

// }

// let choice;
// let total = 0;
// do {
//     choice = parseInt(prompt(`¡Hola bienvenid@!\n A continuación se detallan las ocpiones disponibles, ingrese un valor:
//     \n1. Ver la carta
//     \n2. Escuchar un chiste.
//     \n3. Pedir la cuenta.
//     \n4. Salir.`));

//     switch (choice) {
//         case 1:
//             mostrarCarta();
//             break;
//         case 2:
//             contarChistes();
//             break;
//         case 3:
//             pedirCuenta();
//             break;

//         case 4:
//             alert('¡Gracias por visitarnos!');
//             break;
//     }

// } while (choice != 4);

/* ------------------------------------------------------------------------ */

// const arr = [1, 2, 3, 4];
// console.log(arr);

// arr.forEach(num => num + 1);

// console.log(arr);


// arr.map(num => num + 1);
// console.log(arr);


/* -----------------------------Fibonacci------------------------------------------- */

function fibonacci(num) {
    let secuencia = [1,1];
    for (let i = 2; i < num; i++) {
        secuencia[i] = secuencia[i - 2] + secuencia[i - 1];
    }
    return secuencia;
}




let num = parseInt(prompt(`Ingrese un número`));
let resultado = fibonacci(num);
alert(`${resultado} 🐰`);
