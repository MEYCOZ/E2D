<?php
try{
    $pdo = new PDO("mysql:host=localhost;dbname=db_easytodrive;charset=utf8", "root", "");

}catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
?>