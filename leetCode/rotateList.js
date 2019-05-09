/*
  Rotate List
  https://leetcode.com/problems/rotate-list/


  Given a linked list, rotate the list to the right by k places, where k is non-negative.

  Example 1:
    Input: 1->2->3->4->5->NULL, k = 2
    Output: 4->5->1->2->3->NULL
  Explanation:
    rotate 1 steps to the right: 5->1->2->3->4->NULL
    rotate 2 steps to the right: 4->5->1->2->3->NULL

    Example 2:
      Input: 0->1->2->NULL, k = 4
      Output: 2->0->1->NULL
    Explanation:
      rotate 1 steps to the right: 2->0->1->NULL
      rotate 2 steps to the right: 1->2->0->NULL
      rotate 3 steps to the right: 0->1->2->NULL
      rotate 4 steps to the right: 2->0->1->NULL
*/

//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  // edge case
  if (head === null) return null;

  // find length and end of the list
  let tail = head;
  let length = 1;
  while (tail.next){
    length ++;
    tail = tail.next;
  }

  // create an offset where offset = length - k % length
  let offset = length - (k % length);
  // edge case two -> rotations would render same list
  if (offset === length) return head;
  let current = head;

  // move pointer, split and link again
  while (offset > 1) {
    offset--;
    current = current.next;
  }
  let newHead = current.next;
  current.next = null;
  tail.next = head;
  return newHead;
};

let input = [1, 2, 3, 4, 5]
const buildTest = (input) => {
  let list = input.reduceRight((prev, curr) => {
    let node = new ListNode(curr);
    node.next = prev || null
    return node;
  }, null)
  return list;
}

const testInput = buildTest(input);

const print = (head) => {
  let p1 = head;
  let list = '';
  while (p1){
    list += p1.val + '->'
    if (p1.next === null) list += 'null'
    p1 = p1.next;
  }
  console.log(list)
  return list;
}

const result = rotateRight(testInput, 2);
print(result)
