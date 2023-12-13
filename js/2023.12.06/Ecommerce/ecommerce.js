const products = [
    {
        id: 1,
        name: "Auriculares Beats Studio³ Wireless - Shadow gray",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        image: "https://images.fravega.com/f300/b4f1eb20fe8e244e2d44fc385926371a.jpg.webp",
        price: 370050
    },
    {
        id: 2,
        name: "Tablet Samsung Galaxy TAB A7 Lite Silver",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTDXKWyRdBnFUOa_nOqGCueXhxFrTGJoRNnuaTVoGriE3yM31zG",
        price: 160250
    },
    {
        id: 3,
        name: "Laptop gamer Legion 5 Gen 6",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        image: "https://images.fravega.com/f300/7e2a62c533d013360f4ed8cf8d8e9855.png.webp",
        price: 1300000
    },
    {
        id: 4,
        name: "Chromecast Google Tv Hd",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        image: "https://images.fravega.com/f300/2a13b66dff7380929a41b41521569961.jpg.webp",
        price: 74800
    },
    {
        id: 5,
        name: "Pendrive",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        image: "https://images.fravega.com/f300/d6ef3b21232b52d311fc6e80effd4c4a.jpg.webp",
        price: 1000
    },
    {
        id: 6,
        name: "Smart TV Samsung 47",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        image: "https://images.fravega.com/f300/d7ca24bf5639a7db78c31aa9fa963be8.jpg.webp",
        price: 450000
    },
    {
        id: 7,
        name: "Celular Moto g9 Plus",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        image: "https://images.fravega.com/f300/332a2d22382f714d26253b62446af895.png.webp",
        price: 75000
    },
    {
        id: 8,
        name: "Smartband Reloj Inteligente Nictom",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        image: "https://images.fravega.com/f300/64eb720f59db635827928fcebcc3b14b.jpg.webp",
        price: 9800
    }
];

// -----------------------------------------------------------

// Dibujo el carrito de compra [CARRITO]
function drawCart() {
    let carritoContainer = document.getElementById('carrito-body');
    carritoContainer.innerHTML = ""; 
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = 0;
    carrito.forEach((product) => {
        // genero el html a partir del producto
        let fila = document.createElement("tr");
        // Configuro el contenido de la fila con los datos del producto
        fila.innerHTML = `
            <th class="row">${product.id}</th>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.count}</td>
            <td>${product.price * product.count}</td>
        `;
        // Agrego la fila al cuerpo de la tabla
        carritoContainer.appendChild(fila);
        total += product.price * product.count;
    });
    document.getElementById('total-carrito').textContent = "$" + total;
}

// -----------------------------------------------------------


function cleanCart() {
    localStorage.removeItem("carrito");
    drawCart();
}


// -----------------------------------------------------------

// Crea el detalle del producto [DETAIL]
function createDetail(detailContainer) {
    const product = JSON.parse(localStorage.getItem("product_selected"));

    let div = document.createElement('div');
    div.classList = 'image container-box';
    div.innerHTML = `
        <img src="${product.image}" class="img-fluid" alt="${product.image}">
    </div>
    <div class="div-card-body container-box">
        <h3 class="fs-1 mt-3 bg-transparent">${product.name}</h3>
        <ul class="list-group bg-transparent">
            <li class="text-justify list-group fw-light fs-4 mt-3 lh-sm bg-transparent">${product.description}</li>
            <li class="list-group mt-1 lh-sm fw-light fs-4 bg-transparent">Precio : $${product.price}</li>            
        </ul>
        <button id="btn-add_product">Comprar</button>
    `
    detailContainer.appendChild(div);
    document.getElementById("btn-add_product").addEventListener('click', function () {
        // esta funcion agrega el producto al carrito de compra
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        let findIndex = carrito.findIndex(item => item.id == product.id);
        // El findIndex() retorna el indice del elemento en el arreglo si lo encuentra, caso contrario retorna -1
        let elem;
        if (findIndex == -1) {
            elem = { ...product, count: 1 };
            carrito.push(elem);
        } else {
            elem = carrito[findIndex];
            elem.count++;
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert('Se agregó el producto al carrito.');
    })
}

// -----------------------------------------------------------

// Dibuja las cards dinamicamente [INDEX]

function drawCards(container) {
    products.forEach((product) => {
        let div = document.createElement("div");

        // Configurar el contenido de la fila con los datos del producto
        div.innerHTML = `

        <div class="p-3 rounded">
            <img src="${product.image}" class="rounded shadow-lg card-img-top" alt="${product.name}" height="175">
        </div>
        <div class="card-body d-flex flex-column justify-content-between flex-grow-1">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <div class="d-flex flex-wrap justify-content-between gap-3">
                <div>
                    <p class="price">${product.price}</p>
                </div>
                <div>
                    <button class="btn btn-success" id="btn-${product.id}">Ver más...</button>
                </div>
            </div>
        </div>
        `;
        // Agregar la fila al cuerpo de la tabla
        container.appendChild(div);
        document.getElementById("btn-" + product.id).addEventListener('click', function () {
            localStorage.setItem("product_selected", JSON.stringify(product));
            window.location.href = "./product.html";
        })
    })
}



/*

function drawCards(container, template) {
    const fragment = document.createDocumentFragment();
    products.forEach((product) => {
        template.querySelector('.card-img-top').src = product.image;
        template.querySelector('.card-title').textContent = product.name;
        template.querySelector('.card-text').textContent = product.description;
        template.querySelector('.price').textContent = '$ ' + product.price;
        const detail_button = template.querySelector('.card-button-detail');
        detail_button.addEventListener('click', function() {
            localStorage.setItem("product_selected", JSON.stringify(product));
            window.location.href = "/product-detail.html"; // redirecciona a la pantalla del detalle de la card
        });

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    container.appendChild(fragment);
}
*/


/*
// esto iria en el index.js
const template = document.getElementById('card-index').content;
const containerCard = document.getElementById('container-card');
drawCards(containerCard, template);
*/


/*
// esto iria en el product-detail.js
const containerDetail = document.getElementById('container-detail');
createDetail(containerDetail);
*/

export { drawCards, drawCart, createDetail, cleanCart };