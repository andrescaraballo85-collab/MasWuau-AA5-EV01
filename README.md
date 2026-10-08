#  MasWuau - Componente Front-End

## Sistema de Gestión Veterinaria MasWuau

Proyecto web desarrollado como componente front-end del **Sistema de Gestión Veterinaria MasWuau**, utilizando **React, JSX, Vite y JavaScript**.

El módulo implementado corresponde a la **Gestión de Usuarios**, permitiendo realizar operaciones de registro, consulta, edición y eliminación de usuarios desde una interfaz web dinámica.

---

## Información del proyecto

**Proyecto:** Sistema de Gestión Veterinaria MasWuau
**Módulo:** Gestión de usuarios
**Tipo:** Aplicación web
**Front-End:** React + JSX
**Herramienta de construcción:** Vite
**Lenguaje:** JavaScript
**Control de versiones:** Git
**Repositorio:** GitHub

---

## Objetivo

Desarrollar un componente front-end funcional para la gestión de usuarios del sistema MasWuau, aplicando conceptos de desarrollo con React, componentes reutilizables, manejo de estados, eventos, validaciones, persistencia local y buenas prácticas de codificación.

---

## Funcionalidades

El módulo de gestión de usuarios cuenta con las siguientes funcionalidades:

* Registro de usuarios.
* Edición de usuarios existentes.
* Eliminación de usuarios.
* Confirmación antes de eliminar un usuario.
* Validación de campos obligatorios.
* Validación de correo electrónico.
* Validación de coincidencia de contraseñas.
* Validación de correos electrónicos duplicados.
* Selección de cargo entre Administrador y Empleado.
* Búsqueda de usuarios por nombre, correo o cargo.
* Mensajes informativos de éxito, error y cancelación.
* Persistencia de los registros mediante `localStorage`.
* Diseño adaptable para diferentes tamaños de pantalla.

---

## Componentes React

La aplicación está organizada mediante componentes reutilizables:

### `UserForm.jsx`

Componente encargado del formulario de registro y edición de usuarios.

Incluye:

* Manejo de formularios.
* Validaciones.
* Eventos `onChange` y `onSubmit`.
* Manejo de estados mediante `useState`.

### `UserTable.jsx`

Componente encargado de mostrar los usuarios registrados.

Incluye:

* Visualización de información.
* Búsqueda dinámica.
* Acción de edición.
* Acción de eliminación.

### `AlertMessage.jsx`

Componente encargado de presentar mensajes informativos al usuario después de realizar operaciones.

---

## Estructura del proyecto

```text
MasWuau-Frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AlertMessage.jsx
│   │   ├── UserForm.jsx
│   │   └── UserTable.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── ENLACE_REPOSITORIO.txt
└── README.md
```

---

## Tecnologías utilizadas

* **React:** creación de la interfaz mediante componentes.
* **JSX:** definición de la estructura de los componentes.
* **JavaScript:** lógica y comportamiento de la aplicación.
* **Vite:** herramienta utilizada para crear y ejecutar el proyecto.
* **CSS:** diseño y estilos de la interfaz.
* **Git:** control de versiones.
* **GitHub:** almacenamiento y gestión del repositorio remoto.

---

## Instalación

Para ejecutar el proyecto localmente se requiere tener instalado **Node.js** y **npm**.

Clonar el repositorio:

```bash
git clone https://github.com/andrescaraballo85-collab/MasWuau-Frontend.git
```

Ingresar a la carpeta:

```bash
cd MasWuau-Frontend
```

Instalar las dependencias:

```bash
npm install
```

---

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Después abrir en el navegador la dirección indicada por Vite, normalmente:

```text
http://localhost:5173/
```

---

## Control de versiones

El proyecto utiliza **Git** para el control de versiones.

Principales versiones registradas:

```text
Primera version modulo usuarios React
Agrega enlace del repositorio
```

La rama principal utilizada es:

```text
main
```

---

## Repositorio

Repositorio oficial en GitHub:

https://github.com/andrescaraballo85-collab/MasWuau-Frontend

---

##  Autor

**Iván Andrés Caraballo Camargo - Lady Diana Cabrera Bahamon**

Programa de formación:

**Análisis y Desarrollo de Software - SENA**

Proyecto formativo:

**Sistema de Gestión Veterinaria MasWuau**

---

## Consideraciones

Este componente corresponde al desarrollo del **front-end del módulo de gestión de usuarios**. Actualmente la información de los usuarios se maneja en el estado de React y se conserva localmente mediante `localStorage`.

La solución está preparada para una futura integración con el backend y la base de datos del sistema MasWuau mediante servicios o una API.

---

## ✅ Estado del proyecto

**Módulo funcional en desarrollo**

Operaciones implementadas:

**Crear ✓ | Consultar ✓ | Editar ✓ | Eliminar ✓ | Buscar ✓ | Validar ✓**
