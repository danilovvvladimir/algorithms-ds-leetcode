namespace NS2 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null {
    let current = new ListNode();
    const final = current;

    // Значения у текущих нод в списках
    let val1 = 0;
    let val2 = 0;

    let carry = 0;
    let val = 0;

    while (l1 || l2 || carry) {
      if (l1) {
        val1 = l1.val;
        l1 = l1.next;
      } else {
        val1 = 0;
      }

      if (l2) {
        val2 = l2.val;
        l2 = l2.next;
      } else {
        val2 = 0;
      }

      val = val1 + val2 + carry;

      // последнюю цифру числа (в случае 15 будет 5)
      carry = Math.floor(val / 10);

      // а сюда всё что кроме (10 в нашем случае)
      val = val % 10;

      current.next = new ListNode(val);
      current = current.next;
    }

    return final.next;
  }
}
