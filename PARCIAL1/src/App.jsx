import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const addImage = () => {
    if (!title.trim()) return;

    const randomId = Math.floor(Math.random() * 1000); // Genera un número aleatorio
    const newImage = {
      id: uuidv4(),
      title,
      url: `http://picsum.photos/500/500?random=${randomId}`,
    };

    setImages([...images, newImage]);
    setTitle("");
  };

  const filteredImages = images.filter((img) =>
    img.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Galería de Imágenes</h1>
      <input
        type="text"
        placeholder="Título de la imagen"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addImage}>Añadir Imagen</button>

      <br /><br />
      
      <input
        type="text"
        placeholder="Buscar por título"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
        {filteredImages.map((img) => (
          <div key={img.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h2>{img.title}</h2>
            <img src={img.url} alt={img.title} width="200" height="200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

