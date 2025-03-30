// src/Stack.js

// Clase Book que representa un libro
class Book {
    constructor(name, isbn, author, editorial) {
      this.name = name;
      this.isbn = isbn;
      this.author = author;
      this.editorial = editorial;
    }
  }
  
  class Stack {
    constructor() {
      this.books = [];
    }
  
    // Agregar al inicio en lugar de al final
    push(book) {
      this.books.unshift(book);
    }
  
    printStack() {
      return this.books;
    }
  }
  
  export { Stack, Book };
  
  
  