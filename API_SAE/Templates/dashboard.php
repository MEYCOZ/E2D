<?php

session_start();
require "../Config/connexion_db.php";
// Vérifiez si l'utilisateur est connecté
if (!isset($_SESSION['auto_ecole_id_ecole'])) {
    // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
    header("Location: ../templates/login.php");
    exit();
}

// Récupérez le nom et prénom de l'utilisateur depuis la session
$auto_ecole_nom = $_SESSION['auto_ecole_nom'];
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>
<body>

    <h2>Bienvenue, <?php echo $auto_ecole_nom ; ?>!</h2>

    <p>Voici votre dashboard.</p>

    <!-- Option de déconnexion -->
    <a href="logout.php">Se déconnecter</a>

</body>
</html>
