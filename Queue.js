// Start with your code from LinkedList challenge.
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor () {
    this.head = 0;
    this.tail = 0;
    }
    add(number) {
      // your code here
     let newNode = new Node(number);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
  
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    remove() {
      // your code here
      if (!this.head) {
        return -1;
      }
     else {
        delete this.head
        
       if (!this.head) {
        return {} 
       } else {
         this.head = this.head.next;
         this.tail = this.tail.next;
         console.log(this)
       }
     }
      // this.tail = newNode;
      
    }
    }
  
  
  const queue = new Queue();
  
  queue.add(3);
  queue.add(5);
  // console.log(queue.remove());
  // => 3
  console.log(queue);
  // queue.add(2);
  // queue.add(7);
  console.log(queue.remove());
  // => 5
  
  console.log(queue.remove());
  // => 2
  
  // console.log(queue.remove());
  // => 7
  
  // console.log(queue.remove());
  // => -1
  console.log(queue);
  
