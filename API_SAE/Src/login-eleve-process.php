<?php
session_start();
ini_set('session.gc_maxlifetime', 3600); // 1 heure
ini_set('session.cookie_lifetime', 3600); 
session_write_close();
require "../Config/connexion_db.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = $_POST['login'];
    $mot_de_passe = $_POST['mot_de_passe'];

    $sql = "SELECT id_eleves, nom, mot_de_passe FROM eleves WHERE login = :login LIMIT 1";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['login' => $login]);

    $eleves = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($eleves) {
        if (password_verify($mot_de_passe, $eleves['mot_de_passe'])) {
            $_SESSION['eleves_id_eleves'] = $eleves['id_eleves'];
            $_SESSION['eleves_nom'] = $eleves['nom'];

            header("Location: ../src/indextest.html");// je dois aussi chnager le redirection 
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
