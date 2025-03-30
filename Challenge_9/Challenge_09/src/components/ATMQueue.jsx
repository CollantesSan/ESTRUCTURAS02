import { useState, useRef } from "react";
import Queue from "./Queue";

const ATMQueue = () => {
  const queueRef = useRef(new Queue()); // La cola se maneja con useRef
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [served, setServed] = useState(null); // Persona atendida

  // Agregar persona a la cola
  const handleEnqueue = () => {
    if (name.trim() !== "" && amount.trim() !== "") {
      queueRef.current.enqueue({ name, amount });
      setItems(queueRef.current.getItems()); // Actualizar UI
      setName("");
      setAmount("");
    }
  };

  // Atender persona (FIFO)
  const handleDequeue = () => {
    const removedPerson = queueRef.current.dequeue();
    setItems(queueRef.current.getItems());
    setServed(removedPerson);
  };

  return (
    <div>
      <h2>ATM Queue</h2>

      {/* Formulario para agregar personas */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Withdrawal Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleEnqueue}>Add to Queue</button>

      {/* Persona servida recientemente */}
      {served && (
        <p>
          ✅ Served: {served.name} - ${served.amount}
        </p>
      )}

      {/* Lista de personas en la cola */}
      <ul>
        {items.map((person, index) => (
          <li key={index}>
            {index + 1}. {person.name} - ${person.amount}
          </li>
        ))}
      </ul>

      <button onClick={handleDequeue} disabled={queueRef.current.isEmpty()}>
        Serve Next
      </button>
    </div>
  );
};

export default ATMQueue;

