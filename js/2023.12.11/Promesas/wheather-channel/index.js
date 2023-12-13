let enviar = document.getElementById("enviar");
let ciudad = document.getElementById("ciudad");

enviar.addEventListener("click", => {
    cargarCiudad(ciudad.value);
});

//Async Await:
function cargarCiudad(value) {
    const response = await
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=fdd533266e28101881f610f2b8f1ebe1"
    );

    const data = response.json();
    document.querySelector(".container").computedStyleMap.visibility = "visible";
    document.querySelector("#ciudad").textContent = json.name;
    document.querySelector("#temperatura").innerHTML = json.main.temp.toFixed(2) + "<sup>°C</sup>";
    document.querySelector("#descripcion").textContent = json.weather[0].descripcion;
    document.querySelector("#wicon").serc = "https://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png";

}


//AJAX:

// const input = document.querySelector("input");
// const btn = document.querySelector("button");
// const ciudad = document.getElementById("ciudad");
// const temperatura = document.getElementById("temperatura");
// const grados = document.getElementById("grados");
// const wicon = document.getElementById("wicon");
// const descripcion = document.getElementById("descripcion");

// btn.addEventListener("click", () => {
//     cargarCiudad(input.value);
// });

// function cargarCiudad(value) {
//     fetch(
//         "https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=fdd533266e28101881f610f2b8f1ebe1"
//     )
//         .then((response) => response.json())
//         .then((data) => {
//             ciudad.textContent = data.name;
//             let aCelsius = (data.main.temp - 273.15).toFixed(1);
//             grados.textContent = `${aCelsius} °C`;
//             descripcion.textContent = data.weather[0].description;
//         });
// }



// funcion con promesas
function cargarCiudad() {
    fetch("https://URL")
        .then((response) => response.json())
        .then((json) => {
            document.querySelector(".container").computedStyleMap.visibility = "visible";
            document.querySelector("#ciudad").textContent = json.name;
            document.querySelector("#temperatura").innerHTML = json.main.temp.toFixed(2) + "<sup>°C</sup>";
            document.querySelector("#descripcion").textContent = json.weather[0].descripcion;
            document.querySelector("#wicon").serc = "https://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png";
            console.log(json);
        })
        .catch((error) => console.log("Ocurrió un error: " + error));
}
// funcion con async/await
async function cargarCiudad() {
    try {
        const response = await fetch("https://URL");
        const json = await response.json();
        document.querySelector(".container").computedStyleMap.visibility = "visible";
        document.querySelector("#ciudad").textContent = json.name;
        document.querySelector("#temperatura").innerHTML = json.main.temp.toFixed(2) + "<sup>°C</sup>";
        document.querySelector("#descripcion").textContent = json.weather[0].descripcion;
        document.querySelector("#wicon").serc = "https://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png";
        console.log(json);
    } catch (error) {
        console.log("Ocurrió un error: " + error);
    }
}