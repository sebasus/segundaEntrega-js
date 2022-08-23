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
const storage = []


abrirCompra = (id, popup) =>{
    let tarjeta = tarjetas [id-1]
    const {title, img, price} = tarjeta
    popup.innerHTML = `<div>
     <div class="closePopup">Salir</div>
     <section class="product-detail">
         <div class="imagen">
             <img src="" alt="">
         </div>
         <div class="descripcion-detail">
             <h3>${title}</h3>
             <p>$ ${price}</p>
             <div class="click">
                 <span class="less">-</span>
                 <span class="resultado">0</span>
                 <span class="more">+</span>
             </div>
         <div class="botonCarrito">AGREGAR</div>
     
         </div>
     </section>
     </div>`
    const closePopup = document.querySelector('.closePopup')
    const more = document.querySelector('.more')
    const less = document.querySelector('.less')
    const resultado = document.querySelector('.resultado')
    const agregarAlCarrito = document.querySelector('.botonCarrito')
    
    let contador = 0
   
    more.onclick = () => {
        contador++
        resultado.innerText = contador
    }

    less.onclick = () => {
        contador--
        //console.log(contador)
        contador = contador < 0 ? 0 : contador
        resultado.innerText = contador
    }

    closePopup.onclick = () => {
        popup.classList.add('d-none')
    }
        
    agregarAlCarrito.onclick = () => {
        if(contador != 0){
            //agrego al carrito
            tarjeta.agregadoAlCarrito = contador
            storage.push(tarjeta)
            sessionStorage.setItem('cart', JSON.stringify(storage)) 
            swal({
                title: "Genial!",
                text: `Agregaste ${tarjeta.agregadoAlCarrito} ${title} a tu carrito.`,
                icon: "success",
                button: "Entendido",
              });
        }else{
            //no agregues al carrito - mensaje error
        }
    }
}
 






let proDom = document.querySelector(".proDom")

for (tarjeta of tarjetas){
    const {id, img, title, description, price} = tarjeta
    
    proDom.innerHTML +=  `<div class="col-lg-4 col-md-6 py-5">
                <div class="card m-auto pmv" style="width: 18rem;">
                    <img src="${img}">
                    <div class="card-body">
                        <h5 class="card-title">"${title}"</h5>
                        <p class="card-text">"${description}"</p>
                        <p>$${price}</p>
                        <a href="#" class="btn btn-primary" >Comprar</a>
                        <input type='hidden' class='info-id' value="${id}"
                    </div>
                </div>
            </div>`
        }
const botonesComprar= document.querySelectorAll(".btn")

const popup = document.querySelector(".popupDetalle")

let closePopup 


for (btnCompra of botonesComprar){
    btnCompra.onclick = (e) =>{
        popup.classList.remove('d-none')
         let id = e.target.nextElementSibling.value 
        abrirCompra (id, popup) 

     

        
        //console.log(id) 

    } 
 
}








































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