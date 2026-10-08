import { useState } from 'react';

/**
 * Componente UserTable
 * Muestra los usuarios registrados y permite
 * buscar, editar y eliminar registros.
 */
function UserTable({ users, onEdit, onDelete }) {

  // Estado utilizado para almacenar el texto de búsqueda.
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Filtra los usuarios por nombre, correo o cargo.
   */
  const filteredUsers = users.filter((user) => {

    const search = searchTerm.trim().toLowerCase();

    return (
      user.nombre_completo.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.cargo.toLowerCase().includes(search)
    );
  });

  return (
    <div>

      {/* Campo de búsqueda de usuarios. */}
      <div className="search-container">

        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Buscar por nombre, correo o cargo..."
          className="search-input"
        />

      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>Nombre completo</th>
              <th>Correo electrónico</th>
              <th>Cargo</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.length === 0 ? (

              <tr>
                <td colSpan="4">
                  No se encontraron usuarios.
                </td>
              </tr>

            ) : (

              filteredUsers.map((user) => (

                <tr key={user.id}>

                  <td>{user.nombre_completo}</td>

                  <td>{user.email}</td>

                  <td>
                    <span className="role-badge">
                      {user.cargo}
                    </span>
                  </td>

                  <td>

                    <div className="table-actions">

                      <button
                        type="button"
                        className="btn-edit"
                        onClick={() => onEdit(user)}
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        className="btn-delete"
                        onClick={() => onDelete(user.id)}
                      >
                        Eliminar
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default UserTable;