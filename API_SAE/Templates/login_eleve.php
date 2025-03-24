<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>
<body>

    <h2>Connexion</h2>

    <form action="../Src/login-eleve-process.php" method="POST">
        <label for="login">Login:</label>
        <input type="text" name="login" id="login" required><br><br>

        <label for="mot_de_passe">Mot de passe:</label>
        <input type="password" name="mot_de_passe" id="mot_de_passe" required><br><br>

        <input type="submit" value="Se connecter">
    </form>

</body>
</html>