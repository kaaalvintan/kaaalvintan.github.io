<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Do something with the data (e.g., save to a database, send an email)
    // For now, let's just print the data to the screen
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Message: $message<br>";
}
?>
