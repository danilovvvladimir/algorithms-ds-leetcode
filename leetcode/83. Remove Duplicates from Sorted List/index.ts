namespace NS83 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) return null;

    let currentNode = head;

    while (currentNode.next !== null) {
      if (currentNode.val === currentNode.next.val) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    return head;
  }
}

// Сначала проверяем на то, равна ли нода null, если так, то и вернём null.

// Вводим переменную, которая будет обозначать текущую ноду. Инициализируем головой.

// Потом в цикле (пока есть следующая нода, т.е пробегаемся по всему листу),
// смотрим на то, равно ли текущее значение следующему.
// Если да, то мы должны следующий скипнуть (перепривязываем - убираем следующую ноду которая повторяется). - Как бы стираем это повторяющееся значение
// Если нет, то всё норм и дальше продолжаем проверять.
