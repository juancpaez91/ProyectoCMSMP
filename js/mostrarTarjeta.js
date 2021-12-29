let tazaElegida;
if (localStorage.getItem("tazaComprar")){
        tazaElegida = JSON.parse(localStorage.getItem("tazaComprar"))
}

document.querySelector("#imagenTaza").src = tazaElegida.picture ;
document.querySelector("#nombreTaza").innerHTML = tazaElegida.Nombre;
document.querySelector("#precioTaza").innerHTML = tazaElegida.Precio;
document.querySelector("#pagar").href= tazaElegida.boton;
