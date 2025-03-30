import { useState } from "react";
import Queue from "./components/Queue";

const QueueComponent = () => {
  const [queue] = useState(new Queue());
  const [items, setItems] = useState([]);

  const handleEnqueue = () => {
    queue.enqueue(`Cliente ${queue.size() + 1}`);
    setItems([...queue.items]); // Actualiza el estado para renderizar cambios
  };

  const handleDequeue = () => {
    queue.dequeue();
    setItems([...queue.items]);
  };

  return (
    <div>
      <h2>Cola del Cajero</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleEnqueue}>Agregar Cliente</button>
      <button onClick={handleDequeue} disabled={queue.isEmpty()}>
        Atender Cliente
      </button>
    </div>
  );
};

export default QueueComponent;
