<?php
try{
    $pdo = new PDO("mysql:host=localhost;dbname=easy2drive_db;charset=utf8", "root", "root");
}catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
