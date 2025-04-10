export class Queue {
    constructor() {
    this.items = [];
    }

    enqueue(item) {
    this.items.push(item);
    }

    dequeue() {
    return this.items.shift();
    }

    peek() {
    return this.items[0];
    }

    getAll() {
      return [...this.items]; // FIFO
    }

    isEmpty() {
    return this.items.length === 0;
    }
}
