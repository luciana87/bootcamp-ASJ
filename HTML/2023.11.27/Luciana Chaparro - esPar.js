function esPar(num) {
    return num % 2 === 0;
}


let nro = prompt("Ingrese un número")
nro = parseInt(nro)



if (esPar(nro)) {
    console.log("El número " + nro + " es par.")
} else {
    console.log("El número " + nro + " es impar.")
}
