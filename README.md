# Sistema de Gestión Veterinaria MasWuau

## Evidencia GA7-220501096-AA5-EV01

### Diseño y desarrollo de servicios web - caso

Este proyecto corresponde al desarrollo de un servicio web para el registro y autenticación de usuarios del Sistema de Gestión Veterinaria MasWuau.

El servicio permite recibir un nombre de usuario y una contraseña, validar las credenciales mediante una base de datos MySQL y devolver una respuesta indicando si la autenticación fue satisfactoria o si ocurrió un error.

## Tecnologías utilizadas

- PHP 8
- MySQL 8
- PDO
- HTML5
- JavaScript
- React
- Vite
- Git
- GitHub
- XAMPP

## Estructura del proyecto

```text
MasWuau-AA5-EV01
│
├── api
│   ├── config
│   │   └── database.php
│   │
│   ├── controllers
│   │   ├── login.php
│   │   └── register.php
│   │
│   ├── models
│   │   └── User.php
│   │
│   └── routes
│       └── index.php
│
├── public
├── src
├── .gitignore
├── ENLACE_REPOSITORIO.txt
├── index.html
├── package.json
└── README.md