<?php
error_reporting(E_ERROR | E_PARSE);

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$message = $_POST['message'];

$nospam = $_POST['codeSecond'] ? "spam" : "empty";

if ($firstName && $lastName && $email && $message && $nospam === "empty") {
  // to
  $to  = 'stikrm@gmail.com, alexander@denglischdocs.com';

  // subject
  $subject = 'Got questions from Real Talk';

  // message
  $messagetext = '<html><body>';
  $messagetext .= '  <h4>Got questions from Real Talk site</h4>';
  $messagetext .= '    <table>';
  $messagetext .= '        <tr><td align="right" style="width: 120px;"><b>First name:</b></td><td>' . $firstName . '</td></tr>';
  $messagetext .= '        <tr><td align="right" style="width: 120px;"><b>Last name:</b></td><td>' . $lastName . '</td></tr>';
  $messagetext .= '        <tr><td align="right" style="width: 120px;"><b>Email:</b></td><td align="left">' .
    $email . '</td></tr>';
  $messagetext .= '        <tr><td align="right" style="width: 120px;"><b>Message:</b></td><td align="left">' .
    $message . '</textarea></td></tr>';
  $messagetext .= '  </table></body></html>';

  // To send HTML mail, the Content-type header must be set
  // headers
  $headers = 'From: ' . $email . '/r/n';
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= 'Content-Transfer-Encoding: base64' . "\r\n\r\n";

  $messageEncode = chunk_split(base64_encode($messagetext));

  // Mail it
  mail($to, $subject, $messageEncode, $headers);
  echo '<script>alert(' . $messageEncode . ')</script>';
}
header('location: ../index.php');
