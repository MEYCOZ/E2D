<?php
require "../Config/connexion_db.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->login) && !empty($data->mot_de_passe)) {
    $login = htmlspecialchars(strip_tags($data->login));
    $mot_de_passe = htmlspecialchars(strip_tags($data->mot_de_passe));

    $query = "SELECT * FROM eleve WHERE login = :login";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":login", $login);
    $stmt->execute();
    
    $eleve = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($eleve && password_verify($mot_de_passe, $eleve['mot_de_passe'])) {
        echo json_encode(["message" => "Connexion réussie", "eleve" => $eleve]);
    } else {
        echo json_encode(["message" => "Login ou mot de passe incorrect"]);
    }
} else {
    echo json_encode(["message" => "Données manquantes"]);
}
?>