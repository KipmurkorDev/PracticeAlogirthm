class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    add(number) {
      const newNode = new Node(number);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.length++;
      return this;
    }
    remove() {
      if (!this.head) return -1;
      if (this.head === this.tail) this.last = null;
      let temp = this.head;
      this.head = this.head.next;
  
      this.length--;
      return temp.val;
    }
  }
  
  const queue = new Queue();
  
  queue.add(3);
  queue.add(5);
  console.log(queue.remove());
  // => 3
  console.log(queue);
  queue.add(2);
  queue.add(7);
  console.log(queue.remove());
  // => 5
  
  console.log(queue.remove());
  // => 2
  
  console.log(queue.remove());
  // => 7
  
  console.log(queue.remove());
  // => -1
  console.log(queue);
  
  module.exports = Queue;