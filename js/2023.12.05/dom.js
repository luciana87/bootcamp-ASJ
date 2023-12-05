// //----- DOM : selectores-------
// //Nombre de etiquetas:

// let parrafos = document.getElementsByTagName("p"); //Trae todos los elementos <p>

// parrafos[0]; //"Lorem"
// parrafos[1]; //"Hola"

// //Atributo Name:
// let elem = document.getElementsByName("edad"); //}devuelve colección de objetos (array)

// //ID:
// let elem2 = document.getElementById("boton"); //devuelve todo el contenido del elemento seleccionado, todo el nodo

// // Class:
// let elem3 = document.getElementsByClassName("msj"); //Devuelve conjunto de elementos

// //QuerySelector
// let elem4 = document.querySelector(".msj") //Devuelve una colección tb. Misma nomeclatura del CSS

// let enlace = document.getElementById("enlace")
// enlace.href
// console.log(enlace.href);
// enlace.style.margin;


// let img = document.getElementsByTagName("img")
// img[0].style.border;

// let p1 = getElementById("parrafo1");
// //selecciona la clase del parrafo 1 con .className, se usa siempre className para diferenciar cuando class haga referencia a una clase de un obj
// alert(p1.className);



/*------------------------ EVENTOS ----------------------------*/

//EventListener = escuchador de eventos, se queda esperando determinada acción sobre un elemento


// let btn_submit = document.getElementById("enviar"); //Selecciono el elemento


// btn_submit.addEventListener("click", function () {
//     //Acá va qué ocurre cuando se hace click en el elemento
//     console.log(document.getElementById("txt").value);  // obtenemos lo ingresado por el usuario una vez que hagan click. Necesito que se haga click primero para poder acceder a lo que se carga por el usuario sino no te muestra nada porque esta vacio

// })


//-----------------------------------------------------------------------
//Selecciono y obtengo los elementos:
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let boton = document.getElementsByClassName("btn");

//Creo un evento cuando se hace click sobre el boton
boton[0].addEventListener("click", function () {
    //Obtengo nuevos elementos:
    let nombre_h1 = document.getElementsByClassName("titulo");
    let apellido_h2 = document.getElementsByClassName("titulo-secundario");

    nombre_h1[0].innerHTML = nombre.value;
    apellido_h2[0].innerHTML = apellido.value;
})