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
    $mail->Username   = 'shumtztuber2@gmail.com';                     
    $mail->Password   = 'vckbywtvpxlfxfme';                               
    $mail->SMTPSecure = "ssl";            
    $mail->Port       = 465;   
    $mail->CharSet = 'UTF-8';                                 

    $mail->setFrom('shumtztuber2@gmail.com', 'Email');
    $mail->addAddress('giovanni_soares@aol.com', 'Email'); 

    $mail->isHTML(true);                                  
    $mail->Subject = 'Here is the subject';
    $mail->Body    = file_get_contents('dist/View.html');

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}