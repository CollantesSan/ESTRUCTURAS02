// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import { Stack, Book } from './Stack';

function App() {
  // Crear una instancia de la pila
  const [stack, setStack] = useState(new Stack());
  const [bookDetails, setBookDetails] = useState({
    name: '',
    isbn: '',
    author: '',
    editorial: ''
  });

  useEffect(() => {
    const mockBooks = [
      new Book('El Quijote', '978-3-16-148410-0', 'Miguel de Cervantes', 'Editorial XYZ'),
      new Book('1984', '978-0-452-28423-4', 'George Orwell', 'Editorial ABC'),
      new Book('La Odisea', '978-0-14-026886-7', 'Homero', 'Editorial DEF'),
    ];

    const newStack = new Stack();
    mockBooks.forEach(book => newStack.push(book));
    setStack(newStack);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear un nuevo libro como una instancia de la clase Book
    const newBook = new Book(
      bookDetails.name,
      bookDetails.isbn,
      bookDetails.author,
      bookDetails.editorial
    );

    // Agregar el libro a la pila
    const newStack = new Stack();
    newStack.books = [...stack.books]; // Copiar la pila actual
    newStack.push(newBook);

    // Actualizar el estado con la nueva pila
    setStack(newStack);

    // Limpiar el formulario
    setBookDetails({ name: '', isbn: '', author: '', editorial: '' });
  };

  return (
    <div className="App">
      <h1>Stack of Books (LIFO)</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={bookDetails.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>ISBN:</label>
          <input type="text" name="isbn" value={bookDetails.isbn} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Autor:</label>
          <input type="text" name="author" value={bookDetails.author} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Editorial:</label>
          <input type="text" name="editorial" value={bookDetails.editorial} onChange={handleInputChange} required />
        </div>
        <button type="submit">Agregar Libro</button>
      </form>

      <h2>Libros en la Pila (LIFO)</h2>
      <ul>
        {stack.printStack().map((book, index) => (
          <li key={index}>
            <strong>{book.name}</strong>
            <span> ISBN: {book.isbn}</span>
            <span> Autor: {book.author}</span>
            <span> Editorial: {book.editorial}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;






