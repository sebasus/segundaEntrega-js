let recuperoStorage = sessionStorage.getItem('cart')

let storage = JSON.parse(recuperoStorage)

let listaProductos = document.querySelector(".dom")

for(datos of storage){
    const {agregadoAlCarrito, title, price} = datos
    let total = agregadoAlCarrito * price
    listaProductos.innerHTML += `<article class="items">
                                    <div class="imagen"></div>
                                    <div class="cantidad">${agregadoAlCarrito}</div>
                                    <div class="nombre">${title}</div>
                                    <div class="valor">${price}</div>
                                    <div class="total">${total}</div>
                                </article>`

}





