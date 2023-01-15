<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gmail.com';                     
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = '';                     
    $mail->Password   = '';                               
    $mail->SMTPSecure = "ssl";            
    $mail->Port       = 465;   
    $mail->CharSet = 'UTF-8';                                 

    $mail->setFrom('', 'Email');
    $mail->addAddress('', 'Email'); 

    $mail->isHTML(true);                                  
    $mail->Subject = 'Hello, world';
    $mail->Body    = file_get_contents('dist/View.html');

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}