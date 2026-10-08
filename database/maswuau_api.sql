-- ============================================================
-- Base de datos: MasWuau API
-- Evidencia: GA7-220501096-AA5-EV01
-- Diseño y desarrollo de servicios web - caso
-- ============================================================

-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS maswuau_api
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Seleccionar la base de datos
USE maswuau_api;

-- ============================================================
-- Tabla de usuarios
-- ============================================================

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);