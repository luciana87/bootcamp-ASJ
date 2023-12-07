import {drawCart, cleanCart} from "./ecommerce.js";

drawCart()

document.getElementById('btn-clean-cart').addEventListener('click', cleanCart);

document.getElementById('btn-payment').addEventListener('click', function () {
    alert("Su compra se realizó con éxito. Que la disfrutes!");
    cleanCart();
});