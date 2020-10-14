<?php
 
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$message = $_POST['user_message'];
 
$token = "1206268216:AAF0uYK0GgA6vYn91nFzY6mZgUbXeNb69MY";
 
$chat_id = "-472988115";
 
$arr = array(
  'Name: ' => $name,
  'Phone: ' => $phone,
  'Message: ' => $message,
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>