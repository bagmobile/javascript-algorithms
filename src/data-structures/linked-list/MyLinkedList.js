import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class MyLinkedList {

  constructor(comparatorFunction) {

    this.head = null;

    this.tail = null;

    this.comparatorFunction = new Comparator(comparatorFunction);
  }

  isEmpty() {
    return this.head === null;
  }

  append(value) {
    const node = new LinkedListNode(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  prepend(value) {

    if (this.isEmpty()) {
      this.append(value);
    } else {
      this.head = new LinkedListNode(value, this.head);
    }

    return this;
  }

  isHead(value) {
    return this.head.value === value;
  }

  isTail(value) {
    return this.tail.value === value;
  }

  delete(value) {
    let count = 0;
    if (this.isEmpty()) {
      return count;
    }
    let current = this.head;
    let previous = null;

    while (current) {

      if (this.comparatorFunction.equal(current.value, value)) {

        if (this.isHead(value)) {
          this.head = this.head.next;
        } else if (this.isTail(value)) {
          previous.next = null;
        } else {
          previous.next = current.next;
        }
        count += 1;
      }

      previous = current;
      current = current.next;

    }
    return count;

  }

  deleteHead() {

    const deletedElement = this.isEmpty() ? null : this.head;
    this.head = deletedElement ? this.head.next : null;
    return deletedElement;

  }

  deleteTail() {

    const deletedElement = this.isEmpty() ? null : this.tail;
    let current = this.head;
    let previous = null;

    while (current) {

      if (this.isOne()) {
        this.head = null;
        this.tail = null;
        break;
      }

      if (!current.next) {
        previous.next = null;
        this.tail = previous;
        break;
      }
      previous = current;
      current = current.next;
    }
    return deletedElement;

  }

  toArray(callback) {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(callback ? callback(current.value) : current.value);
      current = current.next;
    }

    return result;
  }

  toString(callback) {
    return this.toArray(callback)
      .toString();
  }

  fromArray(values) {

    values.forEach((item) => this.append(item));
    return this;
  }

  isOne() {
    return this.head === this.tail;
  }

  deleteAll() {
    this.head = null;
    this.tail = null;
  }

  find(value, callback = null) {

    let current = this.head;

    while (current) {

      if ((callback && callback(value)) || this.comparatorFunction.equal(current.value, value)) {
        return current;
      }

      current = current.next;
    }

    return null;

  }
}
