import { useState } from "react";
import { agregarLibroCatalogo } from "../firebase/firebaseService";
import { useNavigate } from "react-router-dom";

function AgregarLibro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const navigate = useNavigate();

  const manejarSubmit = async (e) => {
    e.preventDefault();

    if (!titulo.trim() || !autor.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      await agregarLibroCatalogo({ titulo, autor });
      alert("¡Libro agregado exitosamente al catálogo!");
      setTitulo("");
      setAutor("");
    } catch (error) {
      console.error("Error al agregar libro:", error);
      alert("Hubo un problema al agregar el libro.");
    }
  };

  const manejarVolverDashboard = () => {
    navigate("/home");
  };

  const manejarAgregarListaLibros = async () => {
    const libros = [
      { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez" },
      { titulo: "1984", autor: "George Orwell" },
      { titulo: "El Principito", autor: "Antoine de Saint-Exupéry" },
      { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
      { titulo: "Orgullo y Prejuicio", autor: "Jane Austen" },
      { titulo: "Rayuela", autor: "Julio Cortázar" },
      { titulo: "La Sombra del Viento", autor: "Carlos Ruiz Zafón" },
      { titulo: "Fahrenheit 451", autor: "Ray Bradbury" },
      { titulo: "Crónica de una Muerte Anunciada", autor: "Gabriel García Márquez" },
      { titulo: "El Alquimista", autor: "Paulo Coelho" }
    ];

    try {
      for (const libro of libros) {
        await agregarLibroCatalogo(libro);
      }
      alert("¡Lista de libros agregada exitosamente!");
    } catch (error) {
      console.error("Error al agregar la lista de libros:", error);
      alert("Hubo un problema al agregar los libros.");
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Libro</h2>

      <p className="mensaje-advertencia">
        Este formulario sirve para agregar libros manualmente o cargar varios automáticamente.
      </p>

      <form onSubmit={manejarSubmit} className="formulario-agregar-libro">
        <div className="campo-formulario">
          <label>Título del Libro:</label><br />
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="campo-formulario">
          <label>Autor del Libro:</label><br />
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>

        <button type="submit" className="boton-agregar-libro">
          Agregar Libro
        </button>
      </form>

      {/* Texto aclaratorio sobre agregar lista */}
      <div style={{ marginTop: "30px", marginBottom: "10px" }}>
        <p style={{ color: "#b30000", fontWeight: "bold", textAlign: "center" }}>
          El siguiente botón agrega rápidamente una lista de libros de prueba a la base de datos.
        </p>
      </div>

      {/* Botón nuevo para agregar lista */}
      <div style={{ marginBottom: "30px" }}>
        <button onClick={manejarAgregarListaLibros} className="boton-agregar-libro">
          Agregar Lista de Libros
        </button>
      </div>

      {/* Botón para volver */}
      <div>
        <button onClick={manejarVolverDashboard} className="navbar-button">
          Volver al Dashboard
        </button>
      </div>
    </div>
  );
}

export default AgregarLibro;
