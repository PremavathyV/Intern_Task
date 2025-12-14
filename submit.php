<?php
$conn = new mysqli("localhost", "root", "", "college");

if ($conn->connect_error) {
  die("Connection failed");
}

$name  = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$sql = "INSERT INTO contact_messages (name, email, phone)
        VALUES ('$name', '$email', '$phone')";

if ($conn->query($sql)) {
  echo "Message Sent Successfully";
} else {
  echo "Error";
}
?>
