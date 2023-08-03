namespace NS206 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;

    while (head !== null) {
      const next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }

    return prev;
  }

  const List1Node5 = new ListNode(5);
  const List1Node4 = new ListNode(4, List1Node5);
  const List1Node3 = new ListNode(3, List1Node4);
  const List1Node2 = new ListNode(2, List1Node3);
  const List1Node1 = new ListNode(1, List1Node2);

  console.log(reverseList(List1Node1));
}

// Создаем как бы сначала placeholder для нашего конечного элемента (будет null).
// В цикле идёт по списку. Попутно привязывая указатель NEXT к предыдущей ноде и сохраняя следующую ноду.
