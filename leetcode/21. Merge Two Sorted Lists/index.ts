namespace NS21 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
  ): ListNode | null {
    let currentNode = new ListNode();
    const headNode = currentNode;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        currentNode.next = list1;
        list1 = list1.next;
      } else {
        currentNode.next = list2;
        list2 = list2.next;
      }
      currentNode = currentNode.next;
    }

    if (list1) {
      currentNode.next = list1;
    } else {
      currentNode.next = list2;
    }

    return headNode.next;
  }
}

// Нам нужен новый список, поэтому сначала создаём пустую ноду.
// После этого создаем ещё одну переменную, которая будет указывать на начало текущего списка.

// Потом в цикле, пока существуют первый и второй список мы будем проверять.
// Проверять значения (сверяем значения нод в списках), в итоговый список будем привязывать ту ноду, чье значение меньше.
// И в том списке, где взяли эту ноду, будем перемещаться к следующей ноде.

// Таким образом мы всегда будем добавлять наименьший элемент при проверке.

// И потом после цикла вводим ещё одну проверку, если какой-то список не равен null, то добавляем его к итоговому.

// Возвращаем следующий элемент с головы итогового списка, т.к самый первый элемент в нём - дефолтный.
