import { useState } from 'react';

/**
 * Componente UserForm
 * Permite registrar y editar usuarios del sistema MasWuau.
 * Incluye validaciones básicas de los datos ingresados.
 */
function UserForm({ onSave, userToEdit, onCancel }) {

  // Estado inicial del formulario.
  const [formData, setFormData] = useState({
    nombre_completo: userToEdit?.nombre_completo || '',
    email: userToEdit?.email || '',
    password: '',
    password_verify: '',
    cargo: userToEdit?.cargo || '',
  });

  // Estado utilizado para almacenar los mensajes de validación.
  const [errors, setErrors] = useState({});

  /**
   * Actualiza el estado del formulario cada vez que
   * el usuario modifica un campo.
   */
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Elimina el mensaje de error del campo cuando se modifica.
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: '',
    }));
  };

  /**
   * Valida la información ingresada antes de enviar
   * los datos al componente principal.
   */
  const validateForm = () => {
    const newErrors = {};

    // Validación del nombre completo.
    if (!formData.nombre_completo.trim()) {
      newErrors.nombre_completo = 'El nombre completo es obligatorio.';
    }

    // Validación del correo electrónico.
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido.';
    }

    // Validación de contraseña.
    if (!userToEdit && !formData.password) {
      newErrors.password = 'La contraseña es obligatoria.';
    }

    // Validación de coincidencia de contraseñas.
    if (
      formData.password ||
      formData.password_verify
    ) {
      if (formData.password !== formData.password_verify) {
        newErrors.password_verify = 'Las contraseñas no coinciden.';
      }
    }

    // Validación del cargo.
    if (!formData.cargo) {
      newErrors.cargo = 'Debe seleccionar un cargo.';
    }

    setErrors(newErrors);

    // Retorna true solamente cuando no existen errores.
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Procesa el envío del formulario.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Envía la información al componente padre.
    onSave(formData);

    // Limpia el formulario después de guardar.
    setFormData({
      nombre_completo: '',
      email: '',
      password: '',
      password_verify: '',
      cargo: '',
    });

    setErrors({});
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="nombre_completo">
          Nombre completo
        </label>

        <input
          type="text"
          id="nombre_completo"
          name="nombre_completo"
          value={formData.nombre_completo}
          onChange={handleChange}
          placeholder="Ingrese el nombre completo"
        />

        {errors.nombre_completo && (
          <span className="error-message">
            {errors.nombre_completo}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Correo electrónico
        </label>

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ejemplo@correo.com"
        />

        {errors.email && (
          <span className="error-message">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">
          Contraseña
        </label>

        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Ingrese la contraseña"
        />

        {errors.password && (
          <span className="error-message">
            {errors.password}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password_verify">
          Confirmar contraseña
        </label>

        <input
          type="password"
          id="password_verify"
          name="password_verify"
          value={formData.password_verify}
          onChange={handleChange}
          placeholder="Confirme la contraseña"
        />

        {errors.password_verify && (
          <span className="error-message">
            {errors.password_verify}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="cargo">
          Cargo
        </label>

        <select
          id="cargo"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
        >
          <option value="">
            Seleccione un cargo
          </option>

          <option value="Administrador">
            Administrador
          </option>

          <option value="Empleado">
            Empleado
          </option>
        </select>

        {errors.cargo && (
          <span className="error-message">
            {errors.cargo}
          </span>
        )}
      </div>

      <div className="form-actions">

        <button type="submit" className="btn-primary">
          {userToEdit ? 'Actualizar usuario' : 'Registrar usuario'}
        </button>

        {onCancel && (
          <button
            type="button"
            className="btn-secondary"
            onClick={onCancel}
          >
            Cancelar
          </button>
        )}

      </div>

    </form>
  );
}

export default UserForm;