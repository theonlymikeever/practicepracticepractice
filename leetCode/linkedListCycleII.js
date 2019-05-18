/*
  Linked List Cycle II :: Med
  https://leetcode.com/problems/linked-list-cycle-ii/

  Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

  To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
  Note: Do not modify the linked list.

  Example 1:
    Input: head = [3,2,0,-4], pos = 1
    Output: tail connects to node index 1
    Explanation: There is a cycle in the linked list, where tail connects to the second node.

  Example 2:
    Input: head = [1,2], pos = 0
    Output: tail connects to node index 0
    Explanation: There is a cycle in the linked list, where tail connects to the first node.


  Example 3:
    Input: head = [1], pos = -1
    Output: no cycle
    Explanation: There is no cycle in the linked list.

  Follow up:
    Can you solve it without using extra space?

*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null || head.next === null) return null;

  let p1 = head; // slow pointer
  let p2 = head; // fast pointer

  // iterate through and move the fast pointer two at a time
  // eventually the fast pointer will catch up to the first pointer indicating the 'tail'
  // once caught, move the head through, as well as the second pointer until they meet again
  // they will continue to move until p2 is at the end again, and the head will be at the circular reference
  while (p2 !== null && p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      while (head !== p2) {
        head = head.next;
        p2 = p2.next;
      }
      return head;
    }
  }
  // if we hit the end and theirs no circular ref, return null
  return null;
};

function buildTest(vals, pos) {
  let stack = [];
  let current = new ListNode(vals.shift());
  let head = current;
  stack.push(head);
  while (vals.length) {
    let val = vals.shift();
    current.next = new ListNode(val);
    current = current.next;
    stack.push(current);
  }
  if (pos > -1) {
    current.next = stack[pos];
  }
  return head;
}

let tests = [
  {
    vals: [3, 2, 0, -4],
    pos: 1
  },
  {
    vals: [1, 2],
    pos: 0
  },
  {
    vals: [1],
    pos: -1
  },
  {
    vals: [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5],
    pos: -1
  }
];

let inputs = tests.map(({ vals, pos }) => buildTest(vals, pos));

inputs.forEach(item => console.log(detectCycle(item)));
