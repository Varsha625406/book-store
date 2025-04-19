function addToCart(bookTitle) {
  alert(bookTitle + " added to cart!");
}

/* contact.php */
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);
  echo "Thank you, $name. Your message has been received.";
}
?>

/* login.php */
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST['username'];
  $password = $_POST['password'];
  if ($username === 'admin' && $password === 'password') {
    echo "Welcome, $username!";
  } else {
    echo "Invalid credentials.";
  }
}
?>
