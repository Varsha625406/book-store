<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BookStore - Login</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Login</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="catalog.html">Catalog</a>
      <a href="cart.html">Cart</a>
      <a href="contact.html">Contact</a>
      <a href="login.html">Login</a>
    </nav>
  </header>
  <main>
    <form action="login.php" method="POST">
      <label>Username: <input type="text" name="username" required></label>
      <label>Password: <input type="password" name="password" required></label>
      <button type="submit">Login</button>
    </form>
  </main>
  <footer>
    <p>&copy; 2025 BookStore</p>
  </footer>
</body>
</html>
