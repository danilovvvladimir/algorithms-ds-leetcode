namespace NS141 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function hasCycle(head: ListNode | null): boolean {
    let slowGoingNode: ListNode | null = head;
    let fastGoingNode: ListNode | null = head;

    while (fastGoingNode && fastGoingNode.next && slowGoingNode) {
      slowGoingNode = slowGoingNode.next;
      fastGoingNode = fastGoingNode.next.next;

      if (slowGoingNode === fastGoingNode) return true;
    }

    return false;
  }
}
