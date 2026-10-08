<?php

/**
 * Configuración de conexión a la base de datos
 * Proyecto: Sistema de Gestión Veterinaria MasWuau
 * Evidencia: GA7-220501096-AA5-EV01
 */

// Datos de conexión a MySQL
$host = "localhost";
$port = "3307";
$dbname = "maswuau_api";
$username = "root";
$password = "";

// DSN para la conexión PDO
$dsn = "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4";

try {
    // Crear conexión mediante PDO
    $pdo = new PDO($dsn, $username, $password);

    // Configurar PDO para mostrar errores como excepciones
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Configurar el modo de recuperación de datos
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

} catch (PDOException $e) {

    // Mostrar mensaje si ocurre un error de conexión
    die("Error de conexión con la base de datos: " . $e->getMessage());
}