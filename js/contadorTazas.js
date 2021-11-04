//Manejo del contador para agregar tazas a la compra final
//Saber la cantidad de unidades del producto que quiere el usuario
let tazaClickeada;
if (localStorage.getItem("tazaComprar")){
        tazaClickeada = JSON.parse(localStorage.getItem("tazaComprar"))
}
let contador = document.querySelector(".contador");
let stock = tazaClickeada.Stock;

if (stock == 0){
    fueraStock.innerHTML =" No contamos con mas stock"
}
console.log("PRUEBA")
//Boton +
function botonAgregarFuncion(){
    let cantidad = contador.value;
    if (cantidad < (stock-1)){
        cantidad++;
    }else{
        let fueraStock = document.querySelector("#fueraStock");
        fueraStock.innerHTML= 
        `<div id="contenedorfuerastock" > 
        <div> 
        <a href="index.html#tazas">
        <span>X</span>
        </a>
        <p>¡Lo sentimos! <br>
        No contamos con stock de este producto actualmente</p>
        <p> ¡Gracias por colaborar con nosotros! </p> <br> <br>
        <p id="firma" >Corporación Mujer Sigue Mis Pasos </p>
        <img src="https://res.cloudinary.com/sapphiredev/image/upload/c_scale,h_50/v1635011552/CMSMP/logo_h7fr6k.jpg" alt="logo">
        </div>
        </div>`;
    }
    contador.value = cantidad;
}
//Boton -
function botonSacarFuncion(){
    let cantidad = contador.value;
    if (cantidad != 0){
        cantidad--;
        let fueraStock = document.querySelector("#fueraStock");
        fueraStock.innerHTML= ``;
    }else {
        cantidad = 0;
    }
    contador.value = cantidad;
}
