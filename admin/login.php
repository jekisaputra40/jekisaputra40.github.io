<?php
// === Data login diset manual ===
$user = "admin";
$pass = "12345";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === $user && $password === $pass) {
        // kalau login benar, langsung redirect ke halaman lain
        header("Location: dashboard.php");
        exit;
    } else {
        $pesan = "<p style='color:red;'>Password atau Username salah!</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <style>
    body {
      background: black;
      color: red;
      font-family: "Courier New", monospace;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .box {
      background: #111;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 20px red;
      text-align: center;
    }
    input {
      width: 90%;
      padding: 10px;
      margin: 8px 0;
      border: 1px solid red;
      border-radius: 6px;
      background: black;
      color: red;
    }
    button {
      padding: 10px 20px;
      background: crimson;
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background: darkred;
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>Shell Login</h2>
    <form method="POST">
      <input type="text" name="username" placeholder="Username" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <button type="submit">Masuk</button>
    </form>
    <?php if (!empty($pesan)) echo $pesan; ?>
  </div>
</body>
</html>
