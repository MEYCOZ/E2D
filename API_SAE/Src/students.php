<?php
require "../Config/connexion_db.php";

header('Content-Type: application/json; charset=utf-8');

try {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $sql = "SELECT id, nom, prenom, email, date_naissance, telephone, ville, code_postal, neph FROM eleves WHERE id = :id";
            $stmt = $pdo->prepare($sql);
            $stmt->execute(['id' => $id]);
            $eleves = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $sql = "SELECT id, nom, prenom, email, date_naissance, telephone, ville, code_postal, neph FROM eleves ORDER BY id";
            $stmt = $pdo->query($sql);
            $eleves = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($eleves);
    } 

    else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);

        if (!$data) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid JSON"]);
            exit;
        }

        $sql = "INSERT INTO eleves (nom, prenom, email, date_naissance, telephone, ville, code_postal, neph) 
                VALUES (:nom, :prenom, :email, :date_naissance, :telephone, :ville, :code_postal, :neph)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            'nom' => $data['nom'],
            'prenom' => $data['prenom'],
            'email' => $data['email'],
            'date_naissance' => $data['date_naissance'],
            'telephone' => $data['telephone'],
            'ville' => $data['ville'],
            'code_postal' => $data['code_postal'],
            'neph' => $data['neph']
        ]);

        http_response_code(201);
        echo json_encode(["message" => "Student created"]);
    } 

    else if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $data = json_decode(file_get_contents('php://input'), true);

        if (!$data || !isset($data['id'])) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid JSON or missing ID"]);
            exit;
        }

        $sql = "UPDATE eleves 
                SET nom = :nom, prenom = :prenom, email = :email, date_naissance = :date_naissance, 
                    telephone = :telephone, ville = :ville, code_postal = :code_postal, neph = :neph 
                WHERE id = :id";

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            'id' => $data['id'],
            'nom' => $data['nom'],
            'prenom' => $data['prenom'],
            'email' => $data['email'],
            'date_naissance' => $data['date_naissance'],
            'telephone' => $data['telephone'],
            'ville' => $data['ville'],
            'code_postal' => $data['code_postal'],
            'neph' => $data['neph']
        ]);

        echo json_encode(["message" => "Student updated"]);
    } 

    else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $data = json_decode(file_get_contents('php://input'), true);

        if (!$data || !isset($data['id'])) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid JSON or missing ID"]);
            exit;
        }

        $sql = "DELETE FROM eleves WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['id' => $data['id']]);

        echo json_encode(["message" => "Student deleted"]);
    } 

    else {
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
}
?>
