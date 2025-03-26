<?php
require "../Config/connexion_db.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Récupération des données envoyées en JSON
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->login) && !empty($data->mot_de_passe)) {
    $login = htmlspecialchars(strip_tags($data->login));
    $mot_de_passe = htmlspecialchars(strip_tags($data->mot_de_passe));

    try {
        // Vérifie si l'utilisateur existe avec un mot de passe en clair
        $query = "SELECT * FROM eleves WHERE login = :login AND mot_de_passe = :mot_de_passe";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":login", $login);
        $stmt->bindParam(":mot_de_passe", $mot_de_passe);
        $stmt->execute();
        
        $eleve = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($eleve) {
            // Suppression du mot de passe avant d'envoyer les données
            unset($eleve['mot_de_passe']);

            echo json_encode([
                "success" => true,
                "message" => "Connexion réussie",
                "eleve" => $eleve
            ]);
        } else {
            echo json_encode(["success" => false, "message" => "Login ou mot de passe incorrect"]);
        }
    } catch (PDOException $e) {
        echo json_encode(["success" => false, "message" => "Erreur de connexion à la base de données", "error" => $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Données manquantes"]);
}
?>
