//DOM

let proDom = document.querySelector(".proDom")
let div = ""


const tarjetas = [
    {
        id: 1,
        img :  './img home/Celulosaed.jpg" class="card-img-top" alt="Celulosa Lion Rolling Circus."',
        title : 'Celulosa Lion Rolling Circus',
        description : 'La celulosa más fina del mercado, minimizando la cantidad de papel que se fuma. De combustión lenta y aspecto transparente, ideal para lucir y disfrutar tus flores al máximo.',
        price : 150
    },
    {
        id: 2,
        img :  './img home/armadored.jpg" class="card-img-top" alt="Armador Lion Rolling Circus.',
        title : 'Armador Rolling Circus',
        description : '                    El Armador Lion rolling Circus es una máquina de armar cigarrillos de hasta 78mm. Ideales para los papeles de 1¼", estas máquinas roller son sencillas de utilizar y muy prácticas.',
        price : 700
    },
    {
        id: 3,
        img :  './img home/picador-lrc-4ped.png" class="card-img-top" alt="Picador Lion Rolling Circus.',
        title : 'Picador Lion Rolling Circus',
        description : 'Picador Ámsterdam de 4 partes, ideal para llevar a todos lados. Con un modelo con tallados en relieve, se separa en 4 partes; tiene dientes metálicos, cierre con imán y rejilla para el polvillo.',
        price : 1500
    } 
]

mostrarProductos = () =>{
for (tarjeta of tarjetas){
    div += `<div class="col-lg-4 col-md-6 py-5">
    <div class="card m-auto pmv" style="width: 18rem;">
    <img src="${tarjeta.img}">
    <div class="card-body">
    <h5 class="card-title">"${tarjeta.title}"</h5>
    <p class="card-text">"${tarjeta.description}"</p>
    <p>$${tarjeta.price}</p>
    <a href="#" id="${tarjeta.id}" class="btn btn-primary">Comprar</a>
    </div>
    </div>
    </div>`
}

proDom.innerHTML +=  div

botonesCompra = document.querySelectorAll(".btn") 
}

mostrarProductos()

console.log(botonesCompra);

//CARRITO

let cart
let btnCompra

/*for (btnCompra of botonesCompra){
    btnCompra.addEventListener ("click", addCart = (e) =>{
        localStorage.setItem =  ("card",JSON.stringify(card) );
    })
} */






 

/*
tarjeta = tarjeta ()

tarjeta = () =>{
    car
}




const addItem = () => {

}

const deleteItem = () =>{

}

const deleteCart = () =>{

}
 




 */







































/* let formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', validar= (e)=>{
    e.preventDefault()
    console.log (e.target)
    let arrayForm = e.target
    let comentarios = arrayForm[3]


    if (!comentarios.value) {
        alert('Añade un comentario, por favor.')
    } 

})

 */