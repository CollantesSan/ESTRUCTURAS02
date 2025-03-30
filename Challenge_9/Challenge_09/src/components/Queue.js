class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(person) {
    this.items.push(person);
  }

  dequeue() {
    return this.items.length > 0 ? this.items.shift() : null;
  }

  peek() {
    return this.items.length > 0 ? this.items[0] : null;
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getItems() {
    return [...this.items]; // esto es extra... Devolvemos una copia para evitar mutaciones
  }
}

export default Queue;


  