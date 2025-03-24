<?php
require "../Config/connexion_db.php";

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try {


    $sql = "SELECT e.nom, t.score, t.date_test 
            FROM test t
            JOIN eleves e ON t.id_eleves = e.id_eleves
            ORDER BY t.score DESC, t.date_test DESC";
    $stmt = $pdo->query($sql);

    echo "<h2>Classement des scores</h2>";
    echo "<table border='1'>";
    echo "<tr><th>Nom de l'élève</th><th>Score</th><th>Date du Test</th></tr>";

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr><td>" . htmlspecialchars($row["nom"]) . "</td><td>" . $row["score"] . "/3</td><td>" . $row["date_test"] . "</td></tr>";
    }

    echo "</table>";

} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>
