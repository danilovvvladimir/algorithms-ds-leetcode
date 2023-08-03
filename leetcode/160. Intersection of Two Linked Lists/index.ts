namespace NS160 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null
  ): ListNode | null {
    let newHeadA = headA;
    let newHeadB = headB;

    while (newHeadA !== newHeadB) {
      if (newHeadA === null) {
        newHeadA = headB;
      } else {
        newHeadA = newHeadA.next;
      }

      if (newHeadB === null) {
        newHeadB = headA;
      } else {
        newHeadB = newHeadB.next;
      }
    }

    return newHeadA;
  }

  const List1Node5 = new ListNode(5);
  const List1Node4 = new ListNode(4, List1Node5);
  const List1Node3 = new ListNode(8, List1Node4);
  const List1Node2 = new ListNode(1, List1Node3);
  const List1Node1 = new ListNode(4, List1Node2);

  const List2Node6 = new ListNode(5);
  const List2Node5 = new ListNode(4, List2Node6);
  const List2Node4 = new ListNode(8, List2Node5);
  const List2Node3 = new ListNode(1, List2Node4);
  const List2Node2 = new ListNode(6, List2Node3);
  const List2Node1 = new ListNode(5, List2Node2);

  console.log(getIntersectionNode(List1Node1, List2Node1));
}

// Создаем указатели на текущую ноду в каждом из списков.
// Наша задача найти то, когда эти указатели будут равны друг другу.
// - В цикле пока они не равны проверяем каждую текущую ноду на null (если null, то список закончился и дальше идёт второй, присваиваем текущей ноде одного списка ноду другого).
// А иначе переходим к следующему элементу.
// Это как бы была защита от неравных списков.
// Теперь, должно получиться, что в какой-то момент ноды или РАВНЫ по значниям
