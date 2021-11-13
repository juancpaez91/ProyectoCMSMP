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

botonEnviar.addEventListener("click", enviarNotificacion);

function enviarNotificacion(event) {
    event.preventDefault();

    var connect, form, nombre, email, mensaje, asunto;
 
    nombre = (document.getElementById('nombre').value).trim();
    email = (document.getElementById('emailForm').value).trim();
    mensaje = (document.getElementById('mensajeForm').value).trim();
    asunto = (document.getElementById('asunto').value).trim();

    form = 'nombre=' + nombre + '&email=' + email + '&mensaje=' + mensaje + "&asunto=" + asunto;

    connect = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

     
    connect.onreadystatechange = function() {
        if (connect.readyState == 4 && connect.status == 200) {
            //console.log("response: " + connect.responseText);
            var response = JSON.parse(connect.responseText);
            form_container_div = document.querySelector("#form_container");
            form_success_div = document.querySelector("#form_success");
            form_fail_div = document.querySelector("#form_fail");

            form_container_div.style.display = "none";
            if(response.success) {
                form_success_div.style.display = "block";
            } else {
                form_fail_div.style.display = "block";
            }
        } else if(connect.readyState != 4) {
            //Processing the request
                botonEnviar.innerHTML = '<p>Enviando...</p><i class="fas fa-circle-notch fa-spin"></i>'
                botonEnviar.disabled = true
        }
    };
    connect.open("POST", "./php/form.php", true);
    connect.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    connect.send(form);
    // end submit form
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
    if(mensaje.length < 5){
        txt = false;
    }else{
        txt= true;
    }

    if ((txt === true) && (mail === true)){
        botonEnviar.disabled=false;
    }
}

