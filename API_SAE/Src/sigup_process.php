<?php
    require "../config/connexion_db.php"; // Assurez-vous d'avoir un fichier de connexion à la base de données
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = $_POST['login'];
    $mot_de_passe = $_POST['mot_de_passe'];
    $nom = $_POST['nom'];
    $adresse = $_POST['adresse'];
    $types_de_permis = $_POST['types_de_permis'];
    $formules = $_POST['formules'];


    // Hachage du mot de passe
    $mot_de_passe_hache = password_hash($mot_de_passe, PASSWORD_BCRYPT);

   
    $sql = "INSERT INTO auto_ecole (login, mot_de_passe, nom, adresse, types_de_permis, formules ) VALUES (:login, :mot_de_passe, :nom, :adresse, :types_de_permis, :formules )";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'login' => $login,
        'mot_de_passe' => $mot_de_passe_hache,
        'adresse' => $adresse,
        'nom' => $nom,
        'types_de_permis' => $types_de_permis,
        'formules' => $formules,

  
    ]);

    // Redirection vers la page de connexion après l'inscription
    header("Location: ../templates/login_admin.php");
    exit();
}
?>
