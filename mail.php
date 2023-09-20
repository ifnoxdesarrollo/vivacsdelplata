<?php


require ('PHPMailer/PHPMailer.php');
require ('PHPMailer/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;

$nombre = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$lista = $_POST['list_in'];

$interests = $_POST['check_list'];
$fechainD = $_POST['fechainD'];
$fechainM = $_POST['fechainM'];
$fechainA = $_POST['fechainA'];
$fechasalD = $_POST['fechasalD'];
$fechasalM = $_POST['fechasalM'];
$fechasalA = $_POST['fechasalA'];
$message = $_POST['message'];

//print_r($_POST);
/*
for ($i=0;$i<count($lista);$i++)    
{     
 echo $lista[$i];   
}
*/
$interestsSelect = implode(", ", $interests);
$fechaIngre = "$fechainD/$fechainM/$fechainA";
$fechaSalid = "$fechasalD/$fechasalM/$fechasalA";

$sellist = implode(", ",$lista);


//echo $interestsSelect;
//echo $sellist;
//echo $interestsSelect;
//echo "fecha ingreso: $fechaIngre";
//echo "fecha salida: $fechaSalid";

$body = <<<HTML
    <h2>Datos de contacto</h2>
    <p>Nombre: $nombre <br>
    Email: $email<br>Teléfono: $phone<br>
    About: $sellist<br>
    Intereses: $interestsSelect <br>
    Fecha ingreso: $fechaIngre <br>
    Fecha salida: $fechaSalid <br></p>
    <h2>Mensaje</h2>
    $message
HTML;

$mailer = new PHPMailer();
$mailer->setFrom($email, "$nombre");
$mailer-> addAddress('contact@vivacsdelplata.com','Sitio');
$mailer->Subject = "Mensaje de: $nombre";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';
$rta = $mailer->send();

var_dump($rta);

if($rta = true){
    header("location: page4.php");
}

?>
