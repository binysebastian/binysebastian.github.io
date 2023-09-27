<?php

// Retrieve the form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Format the email message
$body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

// Send the email
mail('binysebastian@gmail.com', 'New Contact Form Submission', $body);

// Redirect the user back to the contact page with a success message
header('Location: contact.php?status=success');

?>
