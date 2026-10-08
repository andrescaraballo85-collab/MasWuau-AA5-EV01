<?php

/**
 * Servicio de registro de usuarios
 * Proyecto: Sistema de Gestión Veterinaria MasWuau
 * Evidencia: GA7-220501096-AA5-EV01
 *
 * Este servicio recibe un usuario y una contraseña,
 * valida la información y registra el usuario en MySQL.
 */

// Permitir solicitudes desde el frontend
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

// Cargar la conexión a la base de datos
require_once __DIR__ . '/../config/database.php';

// Cargar el modelo de usuarios
require_once __DIR__ . '/../models/User.php';

// Verificar que la solicitud utilice el método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Método no permitido. Utilice POST."
    ]);

    exit;
}

// Obtener los datos enviados en formato JSON
$data = json_decode(file_get_contents("php://input"), true);

// Verificar que se hayan recibido los campos requeridos
if (
    !isset($data['usuario']) ||
    !isset($data['password'])
) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "El usuario y la contraseña son obligatorios."
    ]);

    exit;
}

// Limpiar los datos recibidos
$usuario = trim($data['usuario']);
$password = $data['password'];

// Validar que los campos no estén vacíos
if ($usuario === '' || $password === '') {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "El usuario y la contraseña no pueden estar vacíos."
    ]);

    exit;
}

// Crear una instancia del modelo
$userModel = new User($pdo);

// Verificar si el usuario ya existe
$usuarioExistente = $userModel->findByUsername($usuario);

if ($usuarioExistente) {
    http_response_code(409);

    echo json_encode([
        "success" => false,
        "message" => "El usuario ya está registrado."
    ]);

    exit;
}

try {

    // Registrar el nuevo usuario
    $registrado = $userModel->create($usuario, $password);

    if ($registrado) {

        http_response_code(201);

        echo json_encode([
            "success" => true,
            "message" => "Usuario registrado correctamente."
        ]);

    } else {

        http_response_code(500);

        echo json_encode([
            "success" => false,
            "message" => "No fue posible registrar el usuario."
        ]);
    }

} catch (PDOException $e) {

    // Controlar posibles errores de la base de datos
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Error al registrar el usuario."
    ]);
}