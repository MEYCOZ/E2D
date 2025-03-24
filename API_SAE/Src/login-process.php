<?php
session_start();
require "../Config/connexion_db.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = $_POST['login'];
    $mot_de_passe = $_POST['mot_de_passe'];

    $sql = "SELECT id_ecole, nom, mot_de_passe FROM auto_ecole WHERE login = :login LIMIT 1";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['login' => $login]);

    $auto_ecole = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($auto_ecole) {
        if (password_verify($mot_de_passe, $auto_ecole['mot_de_passe'])) {
            $_SESSION['auto_ecole_id_ecole'] = $auto_ecole['id_ecole'];
            $_SESSION['auto_ecole_nom'] = $auto_ecole['nom'];

            header("Location: ../templates/dashboard.php");// je dois aussi chnager le redirection 
            exit();
        } else {
            echo "Mot de passe incorrect";
        }
    } else {
        echo "Utilisateur non trouvé";
    }
}
// ca c'est pour la connexion de l'auto_ecole
?>
