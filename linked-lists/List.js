const Node = require('./Node')

class List {
  constructor() {
    this.length = 0;
  }

  add(val) {
    const newNode = new Node(val);
    if (!this.start) {
      this.start = newNode;
      this.last = newNode;

      this.start.next = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++
  }

  values() {
    let values = [];

    let node = this.start;

    while(node.next) {
      values.push(node.val)
      node = node.next;
    }

    values.push(node.val)

    return values;
  }

  findMiddle() {
    let slowPointer = this.start;
    let fastPointer = this.start;

    while(fastPointer.next && fastPointer.next.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }

    return slowPointer.val


  }
}

module.exports = List