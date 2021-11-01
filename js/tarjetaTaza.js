const prueba = {
    Id:"T001" , Nombre:"Taza Valiente", Precio: 12000, boton:"http://mercadopago.prueba", picture:"../images/Taza-Corazones.jpg"
}

function ObtenerTaza (){
    let taza = document.querySelectorAll(".clickFotos");
    let tazaSeleccionada = taza.target.getAttribute(value);
    let objetoTaza = Tazas.map( e => e.Id == tazaSeleccionada);
    console.log(objetoTaza);
}
document.querySelector("#imagenTaza").src = prueba.picture ;
document.querySelector("#nombreTaza").innerHTML = prueba.Nombre;
document.querySelector("#precioTaza").innerHTML = prueba.Precio;
document.querySelector("#pagar").href= prueba.boton;



//Array con tazas
// const Tazas = [
//     {
//         Id:T001 , Nombre:"Taza Valiente", Precio: 12000, Stock:10, picture:"../images/Taza-Corazones.jpg"
//     },
//     {
//         Id:T002 , Nombre:"Taza Transformación", Precio: 12000, Stock:10, picture:""
//     },
//     {
//         Id:T003 , Nombre:"Taza Sueña", Precio: 12000, Stock:10, picture:""
//     },
//     {
//         Id:T004 , Nombre:"Taza Somos Así", Precio: 12000, Stock:10, picture:""
//     },
//     {
//         Id:T005 , Nombre:"Taza Piensa en Ti", Precio: 12000, Stock:10, picture:""
//     },
//     {
//         Id:T006 , Nombre:"Taza Mujer", Precio: 12000, Stock:10, picture:""
//     },
//     {
//         Id:T007 , Nombre:"Taza Mujer Divina", Precio: 12000, Stock:10, picture:""
//     },
//     {
//         Id:T008 , Nombre:"Taza Maravillosa", Precio: 12000, Stock:10, picture:""
//     },
//     {
//         Id:T009 , Nombre:"Taza Lo Podemos Lograr", Precio: 12000, Stock:10, picture:""
//     },
//     {
//         Id:T010 , Nombre:"Taza Empoderamiento", Precio: 12000, Stock:10, picture:""
//     },
//     {
//         Id:T011 , Nombre:"Taza Corazones", Precio: 12000, Stock:10, picture:""
//     }
// ];