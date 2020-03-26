import { Sorter } from "./Sorter";

class LinkedNode {
  next: LinkedNode | null = null;

  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  head: LinkedNode | null = null;
  current: LinkedNode | null = null;

  add(value: number): void {
    const node = new LinkedNode(value);

    if (!this.head) {
      this.head = node;
      this.current = this.head;
      return;
    }

    if (this.current) {
      this.current.next = node;
      this.current = this.current.next;
    }
  }

  print(): void {
    console.log("---- LinkedList Elements ----");
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("-----------------------------");
  }

  get length(): number {
    let length = 0;
    let currentNode = this.head;
    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }

  at(index: number): LinkedNode {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if(!this.head) {
        throw new Error('LinkedList is empty');
    }

    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
       const leftNode = this.at(leftIndex);
       const rightNode = this.at(rightIndex);
       const leftValue = leftNode.value;
       leftNode.value = rightNode.value;
       rightNode.value = leftValue;
  }
}
