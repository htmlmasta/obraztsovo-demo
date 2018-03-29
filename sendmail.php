<?php
	if (isset($_REQUEST['email']))  {
		$admin_email = "yklimanova@gmail.com, cracovnik@gmail.com";
		
		$name = trim($_REQUEST['name']);
		$phone = trim($_REQUEST['phone']);
		$email = trim($_REQUEST['email']);
		$email = filter_var($email, FILTER_SANITIZE_EMAIL);
		
		$lot = trim($_REQUEST['lot']);

		if ($email || $phone) {
			$text = "$lot\r\n\r\n";
			$text .= "Ф.И.О.: $name\r\n";
			$text .= "Телефон: $phone\r\n";
			$text .= "E-mail: $email\r\n";
			$subj = "[obraztsovo.ru] Заявка на осмотр";
			
			$success = mail($admin_email, $subj, $text, "MIME-Version: 1.0\r\n"."Content-type: text/plain; charset=utf-8\r\n"."From: \"$name\" <$email>");
			if ($success) {
				die('success');
			} else {
				die('failed to sent');
			}
		}
	} else {
		die('No EMAIL');
	}
?>
