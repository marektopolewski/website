<?php
    require "emailsender.php";

    $fname = strip_tags($_POST["fname"]);
    $lname = strip_tags($_POST["lname"]);
    $affil = strip_tags($_POST["affil"]);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $confirm = filter_var(trim($_POST["confirm"]), FILTER_VALIDATE_BOOLEAN);
    $message = nl2br(strip_tags($_POST["message"]));

    if (empty($fname) || empty($lname) || empty($email) || empty($confirm) || empty($message)) {
        http_response_code(500);
        exit("Invalid request!");
    }

    if (empty($affil)) {
        $affil = "(none)";
    }

    $timestamp = gmdate("Y-m-d H:i:s");

    $content = '<html>
        <head>
            <title></title>
            <link href="https://svc.webspellchecker.net/spellcheck31/lf/scayt3/ckscayt/css/wsc.css" rel="stylesheet" type="text/css" />
        </head>
        <body aria-readonly="false" style="font-size: 13px">
            ' . $MAIL_HEADER . '
            <br /> <br />
            <p style="font-size: 15px">Hi ' . $fname . '!</p>
            <br /> <br />
            Thank you for getting in touch.<br/>
            This email is to confirm that you message has been delivered and <u>I will reply as soon as possible</u>.
            <br/><br/><br/>
            For your reference, the submitted form is attached below:
            <hr /><br />
            <div style="font-family: monospace;">
            <table>
                <tr><td>From</td><td>' . $fname . ' ' . $lname . '</td></tr>
                <tr><td>Email</td><td>' . $email . '</td></tr>
                <tr><td>Affil</td><td>' . $affil . '</td></tr>
                <tr><td>Sent</td><td>' . $timestamp . ' (UTC)</td></tr>
            </table><br/>
            ' . $message . '
            </div>
            <br />
            <hr /> <br /> <br />
            <u><strong>DISCLAIMER</strong></u>: This is an automated message, <strong>do not reply</strong> at this email address.
        </body>
    </html>';

    $sentMe = @mail($MY_MAIL, 'New mail on website', $content, $HEADERS, '-f '.$HOST_MAIL);
    $sentCm = @mail($email, 'MarekTopolewski: Email Confirmation', $content, $HEADERS, '-f '.$HOST_MAIL);

    if ($sentMe && $sentCm) {
        http_response_code(200);
        echo "Mail Sent Successfully";
    } else {
        http_response_code(500);
        echo "Mail Not Sent";
    }
?>