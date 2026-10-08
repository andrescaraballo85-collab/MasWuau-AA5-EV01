<?php

/**
 * Servicio de inicio de sesión
 * Proyecto: Sistema de Gestión Veterinaria MasWuau
 * Evidencia: GA7-220501096-AA5-EV01
 *
 * Este servicio recibe un usuario y una contraseña,
 * verifica las credenciales y devuelve el resultado
 * de la autenticación.
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

// Limpiar el usuario recibido
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

// Buscar el usuario en la base de datos
$usuarioEncontrado = $userModel->findByUsername($usuario);

// Verificar que el usuario exista
if (!$usuarioEncontrado) {
    http_response_code(401);

    echo json_encode([
        "success" => false,
        "message" => "Error en la autenticación."
    ]);

    exit;
}

// Verificar la contraseña utilizando el hash almacenado
if (!password_verify($password, $usuarioEncontrado['password'])) {
    http_response_code(401);

    echo json_encode([
        "success" => false,
        "message" => "Error en la autenticación."
    ]);

    exit;
}

// Si las credenciales son correctas
http_response_code(200);

echo json_encode([
    "success" => true,
    "message" => "Autenticación satisfactoria."
]);