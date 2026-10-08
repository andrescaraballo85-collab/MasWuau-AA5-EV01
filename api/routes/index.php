<?php

/**
 * Punto de entrada principal de la API
 * Proyecto: Sistema de Gestión Veterinaria MasWuau
 * Evidencia: GA7-220501096-AA5-EV01
 *
 * Este archivo permite identificar los servicios
 * disponibles en la API.
 */

// Configurar la respuesta como JSON
header("Content-Type: application/json; charset=UTF-8");

// Respuesta informativa de la API
echo json_encode([
    "success" => true,
    "message" => "API MasWuau funcionando correctamente.",
    "servicios" => [
        "registro" => "/api/controllers/register.php",
        "login" => "/api/controllers/login.php"
    ]
]);