/**
 * Componente AlertMessage
 * Muestra mensajes informativos al usuario.
 * Se utiliza para confirmar operaciones realizadas
 * correctamente o informar acciones canceladas.
 */
function AlertMessage({ message, type = 'success', onClose }) {

  // No muestra el componente cuando no existe un mensaje.
  if (!message) {
    return null;
  }

  return (
    <div className={`alert-message alert-${type}`}>

      <span>
        {message}
      </span>

      <button
        type="button"
        className="alert-close"
        onClick={onClose}
        aria-label="Cerrar mensaje"
      >
        ×
      </button>

    </div>
  );
}

export default AlertMessage;