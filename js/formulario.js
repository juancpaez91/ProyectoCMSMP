//Validación formulario
let botonEnviar = document.querySelector("#botonEnviar");
botonEnviar.disabled = true;
function avisoDeshabilitado(){
    if (botonEnviar.disabled == true){
        document.querySelector("#botonDeshabilitado").innerHTML = "*Completar todos los campos del formulario"
    }else{
        document.querySelector("#botonDeshabilitado").innerHTML = ""
    }
}

//TODO TERMINAR DE VERIFICAR
function verificar(){
    let email = document.querySelector("#emailForm").value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let mensaje = document.querySelector("#mensajeForm").value;
    let mail;
    let txt ;
    if (!regex.test(email)) {
        mail = false;
        document.getElementById("emailinvalido").innerHTML = "*Correo invalido";
    } else {
        mail = true;
        document.getElementById("emailinvalido").innerHTML = "";
    }
    if(mensaje.length < 12){
        txt = false;
    }else{
        txt= true;
    }

    if ((txt === true) && (mail === true)){
        botonEnviar.disabled=false;
    }
}
