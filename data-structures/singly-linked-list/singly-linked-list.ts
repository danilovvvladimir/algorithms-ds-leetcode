class SinglyLinkedListNode<T> {
  data: T;
  next: SinglyLinkedListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  private head: SinglyLinkedListNode<T> | null;
  private tail: SinglyLinkedListNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  getSize(): number {
    return this.size;
  }

  pushBack(data: T) {
    const newNode = new SinglyLinkedListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  pushFront(data: T) {
    const newNode = new SinglyLinkedListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  insertAt(data: T, index: number) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    if (index === 0) {
      this.pushFront(data);
      return;
    }

    if (index === this.size) {
      this.pushBack(data);
      return;
    }

    let prevNode = this.head;
    let currentIndex = 0;

    const newNode = new SinglyLinkedListNode(data);

    while (prevNode) {
      if (currentIndex === index - 1) {
        newNode.next = prevNode.next;
        prevNode.next = newNode;

        if (!newNode.next) {
          this.tail = newNode;
        }

        this.size++;
        return;
      }

      prevNode = prevNode.next;
      currentIndex++;
    }
  }

  removeAt(index: number): SinglyLinkedListNode<T> | null {
    if (index < 0 || index > this.size) {
      return null;
    }

    if (index === 0) {
      return this.popFront();
    }

    let prevNode = this.head;
    let currentIndex = 0;

    while (prevNode!.next) {
      if (currentIndex === index - 1) {
        const currentNode = prevNode!.next;

        prevNode!.next = currentNode.next;
        if (!prevNode!.next) {
          this.tail = prevNode;
        }

        this.size--;
        return currentNode;
      }

      prevNode = prevNode!.next;
      currentIndex++;
    }

    return null;
  }

  popFront(): SinglyLinkedListNode<T> | null {
    if (!this.isEmpty()) {
      const oldHead = this.head;
      this.head = this.head!.next;

      this.size--;
      return oldHead;
    } else {
      return null;
    }
  }

  popBack(): SinglyLinkedListNode<T> | null {
    return this.removeAt(this.size - 1);
  }

  find(data: T): SinglyLinkedListNode<T> | null {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
    return null;
  }

  toArray(): T[] {
    const result: T[] = [];

    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return result;
  }

  toString(): string {
    return this.toArray().join(" -> ");
  }

  get(index: number): SinglyLinkedListNode<T> | undefined {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }

      currentIndex++;
      currentNode = currentNode.next;
    }
  }
}

const LinkedList = new SinglyLinkedList();
console.log("Size: ", LinkedList.getSize());
console.log("isEmpty: ", LinkedList.isEmpty());

LinkedList.pushBack(1);
LinkedList.pushFront(2);
console.log("Size: ", LinkedList.getSize());
console.log("isEmpty: ", LinkedList.isEmpty());

// console.log("Удалили элемент в начале:");
// console.log(LinkedList.popFront()?.data);
// console.log("Size: ", LinkedList.getSize());
// console.log("isEmpty: ", LinkedList.isEmpty());

console.log("First Element:", LinkedList.get(0)?.data);
LinkedList.insertAt(333, 3);
LinkedList.removeAt(3);

console.log(LinkedList.toArray());
console.log(LinkedList.toString());
