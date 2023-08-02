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

const List1Node1 = new ListNode(4);
const List1Node2 = new ListNode(2, List1Node1);
const List1Node3 = new ListNode(1, List1Node2);

const List2Node1 = new ListNode(4);
const List2Node2 = new ListNode(3, List2Node1);
const List2Node3 = new ListNode(1, List2Node2);

// Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
// Output: [1, 1, 2, 3, 4, 4];

let finalList = mergeTwoLists(List1Node3, List2Node3);

while (finalList) {
  console.log(finalList.val);

  finalList = finalList.next;
}
