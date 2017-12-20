<?
if (isset($_POST['m_data'])) {$m_data = $_POST['m_data'];}
if (isset($_POST['toEmail'])) {$toEmail = $_POST['toEmail'];}
if (isset($_POST['fromEmail'])) {$fromEmail = $_POST['fromEmail'];}
if (isset($_POST['them'])) {$them = $_POST['them'];}

$send = mail($toEmail,$them,$m_data,"Content-type:text/plain; charset = utf-8\r\nFrom:$fromEmail");