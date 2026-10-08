<?php

/**
 * Modelo de usuarios
 * Proyecto: Sistema de Gestión Veterinaria MasWuau
 * Evidencia: GA7-220501096-AA5-EV01
 *
 * Este modelo contiene las operaciones relacionadas
 * con el registro y consulta de usuarios.
 */

class User
{
    // Conexión a la base de datos
    private PDO $pdo;

    /**
     * Constructor del modelo.
     *
     * @param PDO $pdo Conexión activa a MySQL.
     */
    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    /**
     * Busca un usuario por su nombre de usuario.
     *
     * @param string $usuario Usuario que se desea consultar.
     * @return array|false Datos del usuario o false si no existe.
     */
    public function findByUsername(string $usuario): array|false
    {
        $sql = "SELECT id, usuario, password, fecha_registro
                FROM usuarios
                WHERE usuario = :usuario
                LIMIT 1";

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            ':usuario' => $usuario
        ]);

        return $stmt->fetch();
    }

    /**
     * Registra un nuevo usuario.
     *
     * La contraseña se almacena utilizando un hash seguro.
     *
     * @param string $usuario Nombre del usuario.
     * @param string $password Contraseña del usuario.
     * @return bool Resultado de la operación.
     */
    public function create(string $usuario, string $password): bool
    {
        // Generar un hash seguro para la contraseña
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO usuarios (usuario, password)
                VALUES (:usuario, :password)";

        $stmt = $this->pdo->prepare($sql);

        return $stmt->execute([
            ':usuario' => $usuario,
            ':password' => $passwordHash
        ]);
    }
}