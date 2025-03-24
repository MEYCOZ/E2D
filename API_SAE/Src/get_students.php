<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des étudiants</title>
</head>
<body>
    <h1>Les étudiants</h1>

    <?php
    // juste pour voir la liste des etudiant 
    require "../config/connexion_db.php";

    $query = "SELECT nom, prenom, email, login, mot_de_passe, date_naissance, telephone, ville, code_postal, neph FROM eleves";
    $stmt = $pdo->query($query);

    if ($stmt === false) {
        echo "<p>Erreur lors de la récupération des étudiants.</p>";
    } else {
        $eleves = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (empty($eleves)) {
            echo "<p>Aucun étudiant trouvé.</p>";
        } else {
            include "../templates/list.php";//le code recupere les etudiant dans la bdd pour les afficher dans le list.php 
        }
    }
    ?>
    
</body>
</html>
