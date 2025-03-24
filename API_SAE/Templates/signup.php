<!-- signup.php formulaoire pour inscription auto ecole ( à mettre dans le admin )-->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>
<body>

    <h2>Inscription</h2>

    <form action="../src/sigup_process.php" method="POST">
        <label for="login">Login:</label>
        <input type="text" name="login" id="login" required><br><br>

        <label for="mot_de_passe">Mot de passe:</label>
        <input type="password" name="mot_de_passe" id="mot_de_passe" required><br><br>

        <label for="nom">Nom:</label>
        <input type="text" name="nom" id="nom" required><br><br>

        <label for="adresse">Adresse:</label>
        <input type="text" name="adresse" id="adresse" required><br><br>

        <label for="types_de_permis">type de permis:</label>
        <input type="text" name="types_de_permis" id="types_de_permis" required><br><br>

        <label for="formules">Formule:</label>
        <input type="text" name="formules" id="formules" required><br><br>

        <input type="submit" value="S'inscrire">
    </form>

</body>
</html>
