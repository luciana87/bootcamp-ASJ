function agregarColorAlCuadrado () {
        for (let i = 0; i < cuadrados.length; i++) {
                cuadrados[i].style.backgroundColor = colors[i];
        }
}

function mostrarMensaje () {
        for (let i = 0; i < cuadrados.length; i++) {
                cuadrados[i].addEventListener("click", function () {
                        let clickedColor = cuadrados[i].style.backgroundColor;
                        console.log(clickedColor);
                        if (pickedColor == clickedColor) {
                                messageSpan.innerText = "¡Correcto!";
                                alert("¡Correcto!")
                                resetGame(clickedColor);
                        } else {
                                cuadrados[i].style.backgroundColor = document.body.style.backgroundColor;
                                console.log();
                                messageSpan.innerText = "Intente nuevamente.";
                                alert("Intente nuevamente.")
                        }
                })
                
        }
        
}

function resetGame (clickedColor) {
        for (let i = 0; i < cuadrados.length; i++) {
                cuadrados[i].style.backgroundColor = clickedColor;
                
        }
}

// ------------------------------------------------------------------------------

const colors = ["rgb(218, 24, 24)", "rgb(24, 218, 50)", "rgb(54, 159, 235)", "rgb(255, 25, 213)", "rgb(91, 27, 113)", "rgb(28, 141, 70)"];
let cuadrados = document.querySelectorAll(".square");
let messageSpan = document.getElementById("message");



let span = document.getElementById("colorDisplay");
let pickedColor = colors[2];
console.log(pickedColor);

span.innerText = pickedColor; //Color a adivinar


//--------------------------------------------------------------------------------


agregarColorAlCuadrado();
mostrarMensaje();
