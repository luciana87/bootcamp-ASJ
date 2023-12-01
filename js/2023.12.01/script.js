// let msj = "Hola mundo desde un archivo externo de js.";
// alert(msj);
//------------------- Ejercicio 1 : cantidad de caracterees -----------------------------------
let msjIngresado = prompt("Ingrese una frase corta");
console.log(msjIngresado);

console.log("El mensaje ingresado tiene " + msjIngresado.length + " caracteres.");

//------------------------Ejercicio 2: calculadora de edad -------------------------------------

let edad = parseInt(prompt("Ingrese su edad"));
function calcularDias (num) {
    return (parseInt(num)*365);
}
alert(edad + " años son " + calcularDias(edad) + " días.");

// -------------------------- Ejercicio 3: suma de valores ------------------------------------

let a = parseInt(prompt("ingrese un número"));
let b = parseInt(prompt("Ingrese otro número"));
function sumar(a,b) {
    let resultado = (a + b);
    alert("El resultado de sumar " + a + " + " + b + " = " + resultado);
}

sumar(a,b);

//---------------- Ejercicio 4: Calculador de abastecimiento de por vida ----------------------

function calcularSnacks (age, maxAge, cantSnack, snack) {    
    let resultado = (((maxAge - age ) * 365) * cantSnack);
    alert("Necesitarás " + resultado + " de " + snack + "  para que te alcancen hasta los " + maxAge + " años.")
    return resultado;
}

function calcularMonto (price, totalSnack) {
    alert("Vas a gastar un total de $" + (price*totalSnack) + " en snacks.");
}

let price = 250;
let snack = "chocolates";
let age = 36;
let maxAge = 80;
let cantSnack = 1;
let totalSnack = calcularSnacks(age,maxAge,cantSnack,snack);
calcularMonto(price, totalSnack);

//----------------- Ejercicio 5: vacaciones --------------------------------------------------

function calcularGastoPorComida (dias,presupuesto,cantComidas){
    let total = (presupuesto/cantComidas);
    alert("Podés gastar $" + total + " en cada comida para que te alcance la plata durante los " + dias + " días del viaje.")
}
let dias = 14;
let presupuesto = 400000;
let cantComidas = 28;
calcularGastoPorComida(dias,presupuesto,cantComidas);
