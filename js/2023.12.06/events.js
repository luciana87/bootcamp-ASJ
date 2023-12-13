//Selecciono y obtengo los elementos:
let input = document.getElementById("input");
let h3 = document.getElementById("h3");

//Creo un evento
input.addEventListener("keyup", function () {

    let vocales = /[aeiouAEIOU]/g; //Expresión regular
    h3.textContent = input.value.replace(vocales, '_');
    h3.style.backgroundColor = '#f79443';

})


//---------------------------------------------------------------
//Local Storage:

// almacenamiento local = local storage;
//key - value

let btn_save = document.getElementById("guardar");
let btn_get = document.getElementById("recuperar");

btn_save, addEventListener("click", () => {
    localStorage.setItem("dato", "123456");
})

btn_get.addEventListener("click", () => {
    let mi_dato = localStorage.getItem("dato");
    document.getElementById("datos").innerText = mi_dato;
})