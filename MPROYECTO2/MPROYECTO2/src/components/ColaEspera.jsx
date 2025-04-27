function ColaEspera({ colas }) {
  return (
    <div className="layout-home">
      <div className="columna-lateral"></div>

      <div className="columna-centro">
        <h1>Colas de Espera</h1>

        {Object.keys(colas).length > 0 ? (
          <ul>
            {Object.entries(colas).map(([libroId, datos]) => (
              <li key={libroId}>
                <strong>{datos.titulo || "Título desconocido"}</strong> (ID: {libroId})
                <ul>
                  {datos.usuarios.length > 0 ? (
                    datos.usuarios.map(usuario => (
                      <li key={usuario}>{usuario}</li>
                    ))
                  ) : (
                    <li>No hay usuarios en espera.</li>
                  )}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay usuarios en cola.</p>
        )}
      </div>

      <div className="columna-lateral"></div>
    </div>
  );
}

export default ColaEspera;
