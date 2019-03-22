/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
  let dummyHead = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let carry = 0;
  let current = dummyHead;

  while (p1 || p2) {
    let x = p1 ? p1.val : 0;
    let y = p2 ? p2.val : 0;
    let sum = x + y + carry;
    if (sum >= 10) {
      sum = sum % 10;
      carry = 1;
    }
    p1 = p1 ? p1.next : p1;
    p2 = p2 ? p2.next : p2;

    current.next = new ListNode(sum);
    current = current.next;
  }
  if (carry) {
    current = dummyHead.next;
  }
  return current;
};

function createDeepList(val) {
  let split = Array.isArray(val)
    ? val
    : String(val).split('');
  let list = new ListNode(split.pop()); // first node
  let currentNode = list;
  while (split.length) {
    currentNode.next = new ListNode(split.pop());
    currentNode = currentNode.next;
  }
  return list;
};
let v = createDeepList([2, 4, 3]);
let x = createDeepList([5, 6, 4]);
addTwoNumbers(v, x)