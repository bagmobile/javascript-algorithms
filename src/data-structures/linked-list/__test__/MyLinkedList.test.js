import MyLinkedList from '../MyLinkedList';
import LinkedListNode from '../LinkedListNode';

describe('My Linked List', () => {
  it('should be empty', () => {
    const list = new MyLinkedList();

    expect(list.isEmpty())
      .toBe(true);
  });

  it('should add new element to the head or if not empty to the tail', () => {
    const list = new MyLinkedList();

    expect(list.head)
      .toBeNull();
    expect(list.tail)
      .toBeNull();

    list.append(10);

    expect(list.head)
      .toEqual(new LinkedListNode(10, null));
    expect(list.tail)
      .toEqual(new LinkedListNode(10, null));
    expect(list.head)
      .toBe(list.tail);

    list.append(20);

    expect(list.tail.next)
      .toBeNull();
    expect(list.head.next)
      .not
      .toBeNull();

    expect(list.head)
      .toEqual(new LinkedListNode(10, new LinkedListNode(20, null)));
    expect(list.tail)
      .toEqual(new LinkedListNode(20, null));

  });

  it('should prepend new element to the head', () => {
    const list = new MyLinkedList();

    expect(list.head)
      .toBeNull();
    expect(list.tail)
      .toBeNull();

    list.prepend(10);

    expect(list.head)
      .toEqual(new LinkedListNode(10, null));
    expect(list.tail)
      .toEqual(new LinkedListNode(10, null));
    expect(list.head)
      .toBe(list.tail);

    list.prepend(20);

    expect(list.tail.next)
      .toBeNull();
    expect(list.head.next)
      .not
      .toBeNull();

    expect(list.head)
      .toEqual(new LinkedListNode(20, new LinkedListNode(10, null)));
    expect(list.tail)
      .toEqual(new LinkedListNode(10, null));

  });

  it('should delete element by value and return deleted', () => {
    const list = new MyLinkedList();

    list.append(20);
    list.append(20);
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(20);

    expect(list.delete(10))
      .toBe(1);

    expect(list.toArray())
      .toEqual([20, 20, 20, 30, 20]);

    expect(list.delete(20))
      .toBe(4);
    expect(list.toArray())
      .toEqual([30]);

    expect(list.delete(555))
      .toBe(0);
    expect(list.head)
      .toEqual(new LinkedListNode(30, null));

    expect(list.delete(30))
      .toBe(1);
    expect(list.toArray())
      .toEqual([]);

  });

  it('should delete first element', () => {
    const list = new MyLinkedList();

    expect(list.deleteHead())
      .toBe(null);

    list.append(10);
    list.append(20);
    list.append(30);

    expect(list.deleteHead().value)
      .toBe(10);
    expect(list.deleteHead().value)
      .toBe(20);
    expect(list.deleteHead().value)
      .toBe(30);

    expect(list.deleteHead())
      .toBe(null);

  });

  it('should delete last element', () => {
    const list = new MyLinkedList();

    expect(list.deleteTail())
      .toBe(null);

    list.append(10);
    list.prepend(20);
    list.append(35);

    expect(list.deleteTail().value)
      .toBe(35);

    expect(list.deleteTail().value)
      .toBe(10);

    expect(list.deleteTail().value)
      .toBe(20);

    expect(list.deleteTail())
      .toBe(null);

  });

  it('should be string format', () => {
    const list = new MyLinkedList();

    expect(list.toString())
      .toBe('');

    list.append(10);
    list.prepend(20);
    list.append(35);
    expect(list.toString())
      .toBe('20,10,35');

    expect(list.toString((item) => `Value ${item}`))
      .toBe('Value 20,Value 10,Value 35');

  });

  it('should create list from array', () => {
    const list = new MyLinkedList();
    list.fromArray([4, 6, 5, 2, 6]);

    expect(list.toArray())
      .toEqual([4, 6, 5, 2, 6]);

    list.deleteAll();

    list.fromArray([]);

    expect(list.toArray())
      .toEqual([]);
  });

  it('should remove all elements', () => {
    const list = new MyLinkedList();

    list.append(10);
    list.prepend(20);
    list.append(35);

    expect(list.toArray())
      .toHaveLength(3);

    list.deleteAll();

    expect(list.toArray())
      .toHaveLength(0);

  });

  it('should find element', () => {
    const list = new MyLinkedList();

    expect(list.find(123))
      .toBeNull();

    list.append(10);
    list.prepend(20);
    list.append(535);
    list.append(10);
    list.prepend(720);
    list.append(35);

    expect(list.find(10).value)
      .toBe(10);
    expect(list.find(35).value)
      .toBe(35);

    expect(list.find(12))
      .toBeNull();

  });

});
