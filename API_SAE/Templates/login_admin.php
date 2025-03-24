<?php
session_start();
require "../Config/connexion_db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST['login'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT id_Admin, password FROM admin WHERE login = ?");
    $stmt->execute([$login]);
    $admin = $stmt->fetch();

    if ($admin && password_verify($password, $admin['password'])) {
        $_SESSION['admin_id'] = $admin['id_Admin'];
        echo "Bien joué";// je dois mettre en header le dashboard de l'admin
        exit;
    } else {
        $error = "Identifiants incorrects.";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion Admin</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 100px; }
        form { display: inline-block; background: #f4f4f4; padding: 20px; border-radius: 10px; }
        input { display: block; margin: 10px auto; padding: 8px; width: 200px; }
        button { padding: 10px 20px; background: #007bff; color: white; border: none; cursor: pointer; }
        button:hover { background: #0056b3; }
    </style>
</head>
<body>

<h2>Connexion Admin</h2>

<?php if (isset($error)) echo "<p style='color: red;'>$error</p>"; ?>

<form method="POST">
    <input type="text" name="login" placeholder="Login" required>
    <input type="password" name="password" placeholder="Mot de passe" required>
    <button type="submit">Se connecter</button>
</form>

</body>
</html>
