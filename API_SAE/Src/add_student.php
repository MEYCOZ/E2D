<?php

require "../Config/connexion_db.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Activer le mode exception pour PDO
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try {
    // Récupérer les données envoyées par Angular (JSON)
    $data = json_decode(file_get_contents("php://input"), true);

    // Vérifier si toutes les données sont présentes
    if (!isset($data['nom'], $data['prenom'], $data['login'], $data['mot_de_passe'], $data['email'], $data['date_naissance'], 
                $data['telephone'], $data['ville'], $data['code_postal'], $data['neph'])) {
        throw new Exception("Tous les champs doivent être remplis.");
    }

    // Hachage du mot de passe
    $hashed_password = password_hash($data['mot_de_passe'], PASSWORD_BCRYPT);

    // Requête SQL avec PDO
    $sql = "INSERT INTO eleves (nom, prenom, email, login, mot_de_passe, date_naissance, telephone, ville, code_postal, neph) 
            VALUES (:nom, :prenom, :email, :login, :mot_de_passe, :date_naissance, :telephone, :ville, :code_postal, :neph)";
    
    $query = $pdo->prepare($sql);

    // Exécuter la requête avec les données reçues
    $query->execute([
        'nom' => $data['nom'],
        'prenom' => $data['prenom'],
        'email' => $data['email'],
        'login' => $data['login'],
        'mot_de_passe' => $hashed_password, // Stockage du mot de passe haché
        'date_naissance' => $data['date_naissance'], 
        'telephone' => $data['telephone'],
        'ville' => $data['ville'],
        'code_postal' => $data['code_postal'],
        'neph' => $data['neph']
    ]);

    // Réponse JSON
    echo json_encode(["message" => "Inscription réussie !"]);
    exit();

} catch (Exception $e) {
    echo json_encode(["error" => "Erreur d'insertion : " . $e->getMessage()]);
    exit();
}
