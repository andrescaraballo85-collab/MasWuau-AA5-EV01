import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import AlertMessage from './components/AlertMessage';
import './App.css';

/**
 * Componente principal de la aplicación MasWuau.
 * Gestiona el listado de usuarios y las operaciones
 * de registro, edición y eliminación.
 */
function App() {

  /**
   * Inicializa los usuarios utilizando los datos guardados
   * en el almacenamiento local del navegador.
   */
  const [users, setUsers] = useState(() => {

    try {
      const savedUsers = localStorage.getItem('maswuau_users');

      if (savedUsers) {
        return JSON.parse(savedUsers);
      }

    } catch (error) {

      console.error(
        'Error al recuperar los usuarios almacenados:',
        error
      );

    }

    // Usuarios iniciales cuando no existen datos guardados.
    return [
      {
        id: 1,
        nombre_completo: 'Administrador MasWuau',
        email: 'admin@maswuau.com',
        cargo: 'Administrador',
      },
      {
        id: 2,
        nombre_completo: 'Empleado Veterinaria',
        email: 'empleado@maswuau.com',
        cargo: 'Empleado',
      },
    ];
  });

  // Usuario seleccionado para edición.
  const [userToEdit, setUserToEdit] = useState(null);

  // Estado utilizado para mostrar mensajes informativos.
  const [alert, setAlert] = useState({
    message: '',
    type: 'success',
  });

  /**
   * Guarda automáticamente los usuarios cada vez
   * que la información de la lista cambia.
   */
  useEffect(() => {

    localStorage.setItem(
      'maswuau_users',
      JSON.stringify(users)
    );

  }, [users]);

  /**
   * Registra un nuevo usuario o actualiza
   * un usuario existente.
   */
  const handleSaveUser = (userData) => {

    // Normaliza el correo para comparar correctamente.
    const emailNormalized = userData.email
      .trim()
      .toLowerCase();

    // Verifica si el correo ya está registrado.
    const emailAlreadyExists = users.some(
      (user) =>
        user.email.trim().toLowerCase() === emailNormalized &&
        user.id !== userToEdit?.id
    );

    // Detiene la operación si existe un correo duplicado.
    if (emailAlreadyExists) {

      setAlert({
        message: 'El correo electrónico ya está registrado.',
        type: 'error',
      });

      return;
    }

    // Actualiza un usuario existente.
    if (userToEdit) {

      setUsers((previousUsers) =>
        previousUsers.map((user) =>
          user.id === userToEdit.id
            ? {
                ...user,
                nombre_completo: userData.nombre_completo,
                email: userData.email,
                cargo: userData.cargo,
              }
            : user
        )
      );

      setAlert({
        message: 'El usuario fue actualizado correctamente.',
        type: 'success',
      });

      setUserToEdit(null);

      return;
    }

    // Crea un nuevo usuario.
    const newUser = {
      id: Date.now(),
      nombre_completo: userData.nombre_completo,
      email: userData.email,
      cargo: userData.cargo,
    };

    setUsers((previousUsers) => [
      ...previousUsers,
      newUser,
    ]);

    // Muestra confirmación del registro.
    setAlert({
      message: 'El usuario fue registrado correctamente.',
      type: 'success',
    });
  };

  /**
   * Activa el modo de edición para el usuario seleccionado.
   */
  const handleEditUser = (user) => {

    setUserToEdit(user);

    setAlert({
      message: '',
      type: 'success',
    });
  };

  /**
   * Elimina un usuario después de confirmar la acción.
   */
  const handleDeleteUser = (userId) => {

    const confirmDelete = window.confirm(
      '¿Está seguro de que desea eliminar este usuario?'
    );

    if (!confirmDelete) {
      return;
    }

    setUsers((previousUsers) =>
      previousUsers.filter((user) => user.id !== userId)
    );

    setAlert({
      message: 'El usuario fue eliminado correctamente.',
      type: 'success',
    });

    // Cancela la edición si corresponde al usuario eliminado.
    if (userToEdit?.id === userId) {
      setUserToEdit(null);
    }
  };

  /**
   * Cancela el proceso de edición.
   */
  const handleCancelEdit = () => {

    setUserToEdit(null);

    setAlert({
      message: 'La edición del usuario fue cancelada.',
      type: 'info',
    });
  };

  /**
   * Cierra el mensaje informativo.
   */
  const handleCloseAlert = () => {

    setAlert({
      message: '',
      type: 'success',
    });
  };

  return (
    <div className="app-container">

      <header className="app-header">
        <div>
          <h1>🐾 MasWuau</h1>
          <p>Sistema de Gestión Veterinaria</p>
        </div>
      </header>

      <main className="main-content">

        <section className="page-title">
          <h2>Gestión de usuarios</h2>

          <p>
            Administración de usuarios del sistema
          </p>
        </section>

        {/* Muestra los mensajes de las operaciones realizadas. */}
        <AlertMessage
          message={alert.message}
          type={alert.type}
          onClose={handleCloseAlert}
        />

        <section className="content-card">

          <div className="card-header">
            <h3>
              {userToEdit
                ? 'Editar usuario'
                : 'Registrar usuario'}
            </h3>
          </div>

          <UserForm
            key={userToEdit?.id || 'new-user'}
            onSave={handleSaveUser}
            userToEdit={userToEdit}
            onCancel={
              userToEdit
                ? handleCancelEdit
                : null
            }
          />

        </section>

        <section className="content-card">

          <div className="card-header">
            <h3>Usuarios registrados</h3>
          </div>

          <UserTable
            users={users}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />

        </section>

      </main>

      <footer className="app-footer">
        <p>
          MasWuau © 2026 - Sistema de Gestión Veterinaria
        </p>
      </footer>

    </div>
  );
}

export default App;