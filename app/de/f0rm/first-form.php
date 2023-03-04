<?php
error_reporting(E_ERROR | E_PARSE);

var_dump($_POST);

//first step
$schoolName = $_POST['school_name'];
$schoolAddress = $_POST['school_address'];
$city = $_POST['city'];
$state = $_POST['state'];
$country = $_POST['country'];
$emailAddress = $_POST['email_address'];
$administratorName = $_POST['administrator_name'];

// second step
$grade6 = $_POST['grade_6'];
$grade7 = $_POST['grade_7'];
$grade8 = $_POST['grade_8'];
$grade9 = $_POST['grade_9'];
$grade10 = $_POST['grade_10'];
$grade11 = $_POST['grade_11'];
$grade12 = $_POST['grade_12'];
$grade13 = $_POST['grade_13'];
$courses = $_POST['CourseTitle'];

//third step
$a1Eng = $_POST['a1Eng'];
$a2Eng = $_POST['a2Eng'];
$b1Eng = $_POST['b1Eng'];
$b2Eng = $_POST['b2Eng'];
$c1Eng = $_POST['c1Eng'];
$c2Eng = $_POST['c2Eng'];
$nativeSpeakerEnglish = $_POST['nativeSpeakerEnglish'];

$a1Ger = $_POST['a1Ger'];
$a2Ger = $_POST['a2Ger'];
$b1Ger = $_POST['b1Ger'];
$b2Ger = $_POST['b2Ger'];
$c1Ger = $_POST['c1Ger'];
$c2Ger = $_POST['c2Ger'];
$nativeSpeakerGerman = $_POST['nativeSpeakerGerman'];

//fourth step
$mondayList = $_POST["Mon"];
$tuesdayList = $_POST["Tue"];
$wednesdayList = $_POST["Wed"];
$thurdsayList = $_POST["Thu"];
$fridayList = $_POST["Fri"];
$additionalInformation = $_POST["additionalInformation"];

//no spam
$nospam = $_POST['codeFirst'] ? "spam" : "empty";

//validate
if ($nospam === "empty" && $schoolAddress && $schoolName && $emailAddress && $city && $country && $state) {
    // to
    $to  = 'stikrm@gmail.com, alexander@denglischdocs.com';

    // subject
    $subject = 'Apply on Real Talk';

    // message
    $messagetext = '<html><body>';
    $messagetext .= '  <h3>Apply to Real Talk</h3>';
    $messagetext .= '    <table>';

    // start step 1 
    $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>School name:</b></td><td>' .
        $schoolName . '</td></tr>';
    $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>School address:</b></td><td align="left">' .
        $schoolAddress . '</td></tr>';
    $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>City:</b></td><td align="left">' .
        $city . '</textarea></td></tr>';
    $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>State:</b></td><td align="left">' .
        $state . '</textarea></td></tr>';
    $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Country:</b></td><td align="left">' .
        $country . '</textarea></td></tr>';
    $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Email address:</b></td><td align="left">' .
        $emailAddress . '</textarea></td></tr>';
    if (strlen($administratorName) > 0)    $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Administrator name:</b></td><td align="left">' .
        $administratorName . '</textarea></td></tr>';

    // step 2
    if ($grade6 || $grade7 || $grade8 || $grade9 || $grade10 || $grade11 || $grade12 || $grade13) {
        $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Grade:</b></td><td align="left">';
        if ($grade6  === "on") $messagetext .=  ' Grade 6 | ';
        if ($grade7  === "on") $messagetext .=  ' Grade 7 | ';
        if ($grade8  === "on") $messagetext .=  ' Grade 8 | ';
        if ($grade9  === "on") $messagetext .=  ' Grade 9 | ';
        if ($grade10 === "on") $messagetext .=  ' Grade 10 | ';
        if ($grade11 === "on") $messagetext .=  ' Grade 11 | ';
        if ($grade12  === "on") $messagetext .=  ' Grade 12 | ';
        if ($grade13 === "on") $messagetext .=  ' Grade 13 | ';
    }

    foreach ($courses as $key => $n) {
        $ok =  strlen($n) > 0;
    }

    if ($ok) {
        $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Courses:</b></td><td align="left">';
        foreach ($courses as $key => $n) {
            $messagetext .=  '"' . $n . '", ';
        }
    }

    // step 3
    if ($a1Eng || $a2Eng || $b1Eng || $b2Eng || $c1Eng || $c2Eng || $nativeSpeakerEnglish) {
        $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>English language proficiency:</b></td><td align="left">';
        if ($a1Eng  === "on") $messagetext .=  ' A1: Beginner | ';
        if ($a2Eng  === "on") $messagetext .=  ' A2: Elementary | ';
        if ($b1Eng  === "on") $messagetext .=  ' B1: Intermediate | ';
        if ($b2Eng  === "on") $messagetext .=  ' B2: Upper intermediate | ';
        if ($c1Eng === "on") $messagetext .=  ' C1: Advanced | ';
        if ($c2Eng === "on") $messagetext .=  ' C2: Near-native | ';
        if ($nativeSpeakerEnglish  === "on") $messagetext .=  ' Native speaker | ';
    }

    if ($a1Ger || $a2Ger || $b1Ger || $b2Ger || $c1Ger || $c2Ger || $nativeSpeakerGerman) {
        $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>German language proficiency:</b></td><td align="left">';
        if ($a1Ger  === "on") $messagetext .=  ' A1: Beginner | ';
        if ($a2Ger  === "on") $messagetext .=  ' A2: Elementary | ';
        if ($b1Ger  === "on") $messagetext .=  ' B1: Intermediate | ';
        if ($b2Ger  === "on") $messagetext .=  ' B2: Upper intermediate | ';
        if ($c1Ger === "on") $messagetext .=  ' C1: Advanced | ';
        if ($c2Ger === "on") $messagetext .=  ' C2: Near-native | ';
        if ($nativeSpeakerGerman  === "on") $messagetext .=  ' Native speaker | ';
    }

    //step 4 
    if ($mondayList || $thurdsayList || $tuesdayList || $wednesdayList || $fridayList) {
        $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Availability:</b></td><td align="left">';

        if ($mondayList) {
            $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Monday:</b></td><td align="left">';
            foreach ($mondayList as $key => $n) {
                $messagetext .=  $n . ' | ';
            }
        }
        if ($tuesdayList) {
            $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Tuesday:</b></td><td align="left">';
            foreach ($tuesdayList as $key => $n) {
                $messagetext .=  $n . ' | ';
            }
        }
        if ($wednesdayList) {
            $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Wednesday:</b></td><td align="left">';
            foreach ($wednesdayList as $key => $n) {
                $messagetext .=  $n . ' | ';
            }
        }
        if ($thurdsayList) {
            $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Thursday:</b></td><td align="left">';
            foreach ($thurdsayList as $key => $n) {
                $messagetext .=  $n . ' | ';
            }
        }
        if ($fridayList) {
            $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Friday:</b></td><td align="left">';
            foreach ($fridayList as $key => $n) {
                $messagetext .=  $n . ' | ';
            }
        }
    }

    if ($additionalInformation) {
        $messagetext .= '        <tr><td align="right" style="width: 220px;"><b>Additional information:</b></td><td align="left">' . $additionalInformation;
    }

    // end table
    $messagetext .= '  </table></body></html>';


    $messageEncode = chunk_split(base64_encode($messagetext));

    // To send HTML mail, the Content-type header must be set
    // headers
    $headers = 'From: ' . $emailAddress . '/r/n';
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'Content-Transfer-Encoding: base64' . "\r\n\r\n";


    // Mail it
    mail($to, $subject, $messageEncode, $headers);
    echo '<script>alert(' . $messageEncode . ')</script>';
}
header('location: ../index.php');
