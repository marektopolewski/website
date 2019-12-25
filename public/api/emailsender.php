<?php
    $mailfrom = 'marekwebsite@viva-rumia.com';
    $fromname = 'Nazwa firmy';

    $headers  = 'MIME-Version: 1.0' . "\r\n"; 
    $headers  .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers  .= 'From: '.$fromname .'<'.$mailfrom.'>'. "\r\n";
   
    if (@mail('marek.topolewski@gmail.com', 'tytuł maila', 'Treść maila', $headers, '-f '.$mailfrom)) {
        echo "Mail Sent Successfully";
    } else {
        echo "Mail Not Sent";
    }
?>