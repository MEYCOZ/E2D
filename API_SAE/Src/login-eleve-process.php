<?php
require "../Config/connexion_db.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
    // Récupération des données envoyées par Angular (données JSON)
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!isset($data['login'], $data['mot_de_passe'])) {
        // Si les données 'login' ou 'mot_de_passe' sont manquantes
        echo json_encode(["success" => false, "message" => "Données manquantes."]);
        exit();
    }

    // Récupérer l'utilisateur avec ce login dans la base de données
    $sql = "SELECT * FROM eleves WHERE login = :login";
    $query = $pdo->prepare($sql);
    $query->execute(['login' => $data['login']]);
    $user = $query->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        // Si aucun utilisateur n'est trouvé avec ce login
        echo json_encode(["success" => false, "message" => "Identifiant incorrect"]);
        exit();
    }

    // Vérifier le mot de passe
    if (!password_verify($data['mot_de_passe'], $user['mot_de_passe'])) {
        // Si le mot de passe est incorrect
        echo json_encode(["success" => false, "message" => "Mot de passe incorrect"]);
        exit();
    }

    // Si tout est bon, on renvoie une réponse avec les informations de l'utilisateur
    echo json_encode(["success" => true, "message" => "Connexion réussie", "user" => $user]);
    
} catch (Exception $e) {
    // En cas d'erreur, on renvoie un message d'erreur
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>
