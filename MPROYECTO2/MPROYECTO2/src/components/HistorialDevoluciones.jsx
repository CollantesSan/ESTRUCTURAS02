import { useEffect, useState } from "react";
import { suscribirHistorialDevoluciones, agregarLibroCatalogo, eliminarHistorialDevolucion } from "../firebase/firebaseService";

function HistorialDevoluciones({ setCatalogo }) {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const unsubscribe = suscribirHistorialDevoluciones(setHistorial);
    return () => unsubscribe();
  }, []);

  const rehacerDevolucion = async (libro) => {
    try {
      await agregarLibroCatalogo({
        titulo: libro.titulo,
        autor: libro.autor
      });

      await eliminarHistorialDevolucion(libro.id);

      console.log(`Libro "${libro.titulo}" regresado al catálogo y eliminado del historial.`);
    } catch (error) {
      console.error("Error al rehacer devolución:", error);
      alert("Hubo un problema al rehacer la devolución.");
    }
  };

  return (
    <div className="layout-home">
      <div className="columna-lateral"></div>

      <div className="columna-centro">
        <h1>Historial de Devoluciones</h1>

        {historial.length > 0 ? (
          <ul>
            {historial.map(libro => (
              <li key={libro.id}>
                {libro.titulo} - {libro.autor}
                <button 
                  onClick={() => rehacerDevolucion(libro)}
                  style={{
                    marginLeft: "10px",
                    padding: "6px 12px",
                    fontSize: "14px",
                    borderRadius: "20px",
                    backgroundColor: "#e60000",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s ease"
                  }}
                >
                  Rehacer devolución
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay libros devueltos todavía.</p>
        )}
      </div>

      <div className="columna-lateral"></div>
    </div>
  );
}

export default HistorialDevoluciones;
