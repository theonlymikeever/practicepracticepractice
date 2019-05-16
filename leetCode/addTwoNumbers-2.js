/* 
  Add Two Numbers
  https://leetcode.com/problems/add-two-numbers/

  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example:
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // Edge cases
  if (l1 === null && l1 === null) return new ListNode(0);

  let p1 = l1;
  let p2 = l2;
  let current = new ListNode(0);
  let resHead = current; // Pointer results Head
  let carry = 0;

  while (p1 || p2 || carry > 0) {
    let val1 = p1 ? p1.val : 0;
    let val2 = p2 ? p2.val : 0;
    let tempSum = val1 + val2 + carry;
    if (tempSum > 9) {
      carry = 1;
      current.val += tempSum % 10;
      current.next = new ListNode(0);
    }
    else {
      carry = 0;
      current.val = tempSum;
      current.next = (p1 && p1.next || p2 && p2.next) ? new ListNode(0) : null;
    }
    
    current = current.next;
    p1 = p1 ? p1.next : null;
    p2 = p2 ? p2.next : null;
  }
  return resHead;
};


/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function LinkedList(vals) {
  let queue = [...vals];
  let head = new ListNode(queue.shift());
  let current = head;
  while (queue.length) {
    let newNode = new ListNode(queue.shift());
    current.next = newNode;
    current = current.next;
  }
  return head;
}

const x = new LinkedList([2,4,3]);
const y = new LinkedList([5,6,4]);
const a = new LinkedList([5]);
const b = new LinkedList([5]);

console.log(addTwoNumbers(x, y));
console.log(addTwoNumbers(a, b));