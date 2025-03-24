<?php
// Démarrer la session
if (!isset($_COOKIE[session_name()])) {
    die("Problème de cookie de session ! Activez les cookies dans votre navigateur.");
}
session_start();
ini_set('session.gc_maxlifetime', 3600); // 1 heure
ini_set('session.cookie_lifetime', 3600); 
session_write_close();
$_SESSION['id_eleves'] = $row['id_eleves']; // Stocker l'ID de l'élève connecté
echo "Connexion réussie ! ID élève enregistré : " . $_SESSION['id_eleves'];
exit();
if (!isset($_SESSION['id_eleves'])) {
    die("Session perdue ! Vous avez été déconnecté.");
}
require "../Config/connexion_db.php";

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
date_default_timezone_set('Europe/Paris');

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION['id_eleves'])) {
    // Déboguer : afficher l'ID de l'élève
    echo "ID élève dans la session : " . (isset($_SESSION['id_eleves']) ? $_SESSION['id_eleves'] : 'non défini');
    
    // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    header("Location: ../templates/login_eleve.php");

}

try {

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupérer les données envoyées
        $id_eleves = $_SESSION['id_eleves'];  // ID de l'élève connecté depuis la session
        $score = 0;  // Initialisation du score, à calculer dans le formulaire
        $date_test = date("Y-m-d H:i:s");  // Date et heure actuelles
        $theme = "Test de code de la route";  // Exemple de thème

        // Calculer le score en fonction des réponses du formulaire
        $reponses = [
            "q1" => "50",
            "q2" => "arreter",
            "q3" => "non"
        ];

        foreach ($reponses as $question => $reponse_correcte) {
            if (isset($_POST[$question]) && $_POST[$question] == $reponse_correcte) {
                $score++;
            }
        }

        // Enregistrer le test dans la table `test`
        $sql = "INSERT INTO test (id_eleves, theme, date_test, score) 
                VALUES (:id_eleves, :theme, :date_test, :score)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":id_eleves", $id_eleves, PDO::PARAM_INT);
        $stmt->bindParam(":theme", $theme, PDO::PARAM_STR);
        $stmt->bindParam(":date_test", $date_test, PDO::PARAM_STR);
        $stmt->bindParam(":score", $score, PDO::PARAM_INT);

        if ($stmt->execute()) {
            echo "Test enregistré avec succès ! Redirection en cours...";
sleep(2); // Attendre 2 secondes avant la redirection

exit();
        } else {
            echo "Erreur lors de l'enregistrement du test.";
        }
    }
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>
