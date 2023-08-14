namespace NSIterator {
  interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
  }

  interface IterableCollection<T> {
    createIterator(): Iterator<T>;
  }

  class ArrayIterator<T> implements Iterator<T> {
    private collection: T[];
    private index: number = 0;

    constructor(collection: T[]) {
      this.collection = collection;
    }

    hasNext(): boolean {
      return this.index < this.collection.length;
    }

    next(): T {
      return this.collection[this.index++];
    }
  }

  class ArrayCollection<T> implements IterableCollection<T> {
    private items: T[] = [];

    addItem(item: T): void {
      this.items.push(item);
    }

    createIterator(): Iterator<T> {
      return new ArrayIterator(this.items);
    }
  }

  const collection = new ArrayCollection<number>();
  collection.addItem(1);
  collection.addItem(2);
  collection.addItem(3);

  const iterator = collection.createIterator();

  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
}
