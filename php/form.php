<?php

require 'MyPHPMailer.php';

$response = new stdClass();
$response->success = false; // true / false
$response->code = 0; // 200
$response->message = "";

// parametros
$corporacion_email = 'mbelenduhart@gmail.com';
$corporacion_nombre = 'Corporación Mujer sigue mis pasos';
$asunto_del_email = 'Contacto a traves del sitio web C.M.S.M.P.';


// 1. obtener datos del form y limpiarlos
// 1.1 verificar tipo de request
if($_SERVER['REQUEST_METHOD'] != "POST") {
    // cancelar
    $response->code = 999;
    $response->message = "wrong request";
    echo json_encode($response);
    exit;
}
// 1.2 obtener valores enviados desde el formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$asunto = $_POST['asunto'];

// 1.3 limpiar los valores enviados
$nombre = cleanString($nombre);
$email = cleanString($email);
$mensaje = cleanString($mensaje);
$asunto = cleanString($asunto);
// 1.4 validar si los valores no estan vacios
if($nombre == '' || $email == '' || $mensaje == '' || $asunto == '') {
// if($email == '' || $mensaje == '') {
    // error: se han enviado valores vacios
    $response->code = 998;
    $response->message = "Completar todos los datos obligatorios";
    echo json_encode($response);
    exit;
}

if(!isEmailValid($email)) {
    // error: correo electronico invalido
    $response->code = 997;
    $response->message = "Email inválido";
    echo json_encode($response);
    exit;
}

$mensaje_final = "Buenos dias, <br>" .
                "Hay un nuevo mensaje de: " . $nombre . "<br>" .
                "Correo electronico: " . $email . "<br>" .
                "Asunto: " . $asunto . "<br>" .
                "Mensaje: " . $mensaje;

// 2. enviar correo
try {
    $phpMailer = new MyPHPMailer();

    $sendEmail = $phpMailer->getMail();

    //Recipients
    // $mail->setFrom('from@example.com', 'Mailer');
    // $mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');
    $sendEmail->setFrom($corporacion_email, $corporacion_nombre);
    //$sendEmail->addAddress($email, $nombre);
    $sendEmail->addAddress($corporacion_email, $corporacion_nombre);

    //Content
    $sendEmail->isHTML(true);                                  //Set email format to HTML
    $sendEmail->Subject = $asunto_del_email;
    $sendEmail->Body    = $mensaje_final;
    $sendEmail->AltBody = $mensaje_final;

    $sendEmail->send();

    $response->success = true; 
    $response->code = 200;
    $response->message = "El mail fue enviado correctamente";
    echo json_encode($response);
    exit;
} catch (Exception $e) {
    $response->code = 900;
    $response->message = "El mensaje no pudo ser enviado. Mailer Error: {$sendEmail->ErrorInfo}";
    echo json_encode($response);
    exit; 
}


/**
 * Funciones para validaciones
 */

/**
 * Function: it cleans a String variables to avoid Injection
 * @param string $string Contains the string to be cleaned
 * @return string
 * @author Matias Carrasco
 */
function cleanString(string $string) : string
{
    $string = strip_tags($string);
    $string = str_replace("'", "", $string);
    $string = str_replace('"', "", $string);
    $string = trim($string);
    return $string;
}
/**
 * Function: it validates if an email address has a valid format
 * @param string $email Contains an email address
 * @return bool
 * @author Matias Carrasco
 */
function isEmailValid($email)
{
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return true;
    }
    return false;
}