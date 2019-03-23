/*
  Given a linked list, remove the n-th node from the end of list and return its head.

  Example:
    Given linked list: 1->2->3->4->5, and n = 2.

    After removing the second node from the end, the linked list becomes 1->2->3->5.
    Note:

    Given n will always be valid.

  Follow up:
    Could you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 // Setup
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// let val = 5;
let val = 2;
// let val = 1;
let head  = new ListNode(val);
while (val > 1){
  val -= 1;
  const nextNode = new ListNode(val);
  nextNode.next = head;
  head = nextNode;
}


var removeNthFromEnd = function(head, n) {
  /*
    Single pass method requires iterating through by setting
    two pointers to the head. The first pointer is moved through
    until it is n steps ahead. You the iterate both the same pace
    until p1 hits the end, meaning p2 is in the nth position.

    If we keep a previous pointer (behind p2), we can simply
    cut the p2 node off using that prev pointer.
  */
  // handle single node, single delete
  if (!head.next && n === 1) return null;
  let p1 = head;
  let p2 = head;

  for (let idx = 0; idx < n; idx++) {
    if (p1 === null) {
      break; // we've hit out of bounds!
    }
    p1 = p1.next;
  }
  // console.log('p1 is now', p1, 'p2 is', p2);

  // the deletion node is the first one!
  if (p1 === null) {
    return p2.next;
  }

  let prev = p2;
  while (p1 !== null) {
    // console.log('prev', prev.val, 'p2', p2.val)
    p1 = p1.next;
    prev = p2;
    p2 = p2.next;
    if (p1 === null) {
      prev.next = prev.next.next;
    }
  }
  return head;
};

// const result = removeNthFromEnd(head, 2);
const result = removeNthFromEnd(head, 1);
console.log('RES:',result)

