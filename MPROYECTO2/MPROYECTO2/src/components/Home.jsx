import { useNavigate } from "react-router-dom";

function Home({ usuarioActual, setUsuarioActual }) {
  const navigate = useNavigate();

  const manejarAgregarLibro = () => {
    navigate("/agregar-libro");
  };

  return (
    <div className="layout-home"> {/* NUEVO contenedor general de columnas */}
      
      <div className="columna-lateral"></div> {/* Lado izquierdo */}

      <div className="columna-centro"> {/* Centro donde va tu contenido */}
        <h1>Inicio</h1>

        <p className="mensaje-advertencia">
          Esta es la página principal desde donde puedes navegar por la biblioteca.
        </p>

        <ul>
          <li>Pedir prestados libros en el Catálogo</li>
          <li>Revisar el historial de devoluciones</li>
          <li>Gestionar la cola de espera de libros</li>
        </ul>

        <div style={{ marginTop: "20px" }}>
          <button onClick={manejarAgregarLibro} className="navbar-button">
            Agregar Libro
          </button>
        </div>
      </div>

      <div className="columna-lateral"></div> {/* Lado derecho */}

    </div>
  );
}

export default Home;
