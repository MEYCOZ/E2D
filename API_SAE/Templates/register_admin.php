<?php
session_start();
require "../Config/connexion_db.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = trim($_POST['nom']);
    $prenom = trim($_POST['prenom']);
    $login = trim($_POST['login']);
    $password = $_POST['password'];

    // Vérifier si le login existe déjà
    $stmt = $pdo->prepare("SELECT id_Admin FROM admin WHERE login = ?");
    $stmt->execute([$login]);
    if ($stmt->fetch()) {
        $error = "Ce login est déjà pris.";
    } else {
        // Hasher le mot de passe
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        // Insérer l'admin dans la base
        $stmt = $pdo->prepare("INSERT INTO admin (nom, Prenom, login, password) VALUES (?, ?, ?, ?)");
        if ($stmt->execute([$nom, $prenom, $login, $hashed_password])) {
            header("Location: login_admin.php");
            exit;
        } else {
            $error = "Erreur lors de l'inscription.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription Admin</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 100px; }
        form { display: inline-block; background: #f4f4f4; padding: 20px; border-radius: 10px; }
        input { display: block; margin: 10px auto; padding: 8px; width: 200px; }
        button { padding: 10px 20px; background: #28a745; color: white; border: none; cursor: pointer; }
        button:hover { background: #218838; }
    </style>
</head>
<body>

<h2>Inscription Admin</h2>

<?php if (isset($error)) echo "<p style='color: red;'>$error</p>"; ?>

<form method="POST">
    <input type="text" name="nom" placeholder="nom" required>
    <input type="text" name="prenom" placeholder="prenom" required>
    <input type="text" name="login" placeholder="login" required>
    <input type="password" name="password" placeholder="Mot de passe" required>
    <button type="submit">S'inscrire</button>
</form>

<p>Déjà un compte ? <a href="login.php">Se connecter</a></p>

</body>
</html>
