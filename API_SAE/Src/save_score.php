<?php
require "../Config/connexion_db.php";

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
date_default_timezone_set('Europe/Paris');

try {


    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupérer les données envoyées
        $nom_eleves = $_POST["nom_eleves"];
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

        // Récupérer l'ID de l'élève à partir du nom
        $sql = "SELECT id_eleves FROM eleves WHERE nom = :nom_eleves";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":nom_eleves", $nom_eleves, PDO::PARAM_STR);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            // Si l'élève existe, récupérer l'ID
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $id_eleves = $row['id_eleves'];

            // Enregistrer le test dans la table `test`
            $sql = "INSERT INTO test (id_eleves, theme, date_test, score) 
                    VALUES (:id_eleves, :theme, :date_test, :score)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(":id_eleves", $id_eleves, PDO::PARAM_INT);
            $stmt->bindParam(":theme", $theme, PDO::PARAM_STR);
            $stmt->bindParam(":date_test", $date_test, PDO::PARAM_STR);
            $stmt->bindParam(":score", $score, PDO::PARAM_INT);

            if ($stmt->execute()) {
                echo "Test enregistré avec succès !";
            } else {
                echo "Erreur lors de l'enregistrement du test.";
            }
        } else {
            echo "Élève non trouvé avec ce nom.";
        }
    }
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>
