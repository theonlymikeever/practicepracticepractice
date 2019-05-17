/* 
  Merge K Sorted Lists :: Hard
  https://leetcode.com/problems/merge-k-sorted-lists/
  
  Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

  Example:
    Input:
    [
      1->4->5,
      1->3->4,
      2->6
    ]
    Output: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function LinkedList(){
  this.head = null;
}

LinkedList.prototype.add = function(val){
  let newNode = new ListNode(val)
  if (!this.head) this.head = newNode;
  else {
    let current = this.head;
    while(current){
      if (current.next) {
        current = current.next;
      } else {
        current.next = newNode;
        current = newNode.next;
      }
    }
  }
};
function print(list){
  let output = [];
  let current = this.head ? this.head : list;
  while (current) {
    output.push(current.val);
    current = current.next;
  }
  output = output.join(', ');
  console.log('List:', output);
}

LinkedList.prototype.print = print;

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // edge cases
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];
  // create a function for merging two lists together
  function merge(l1, l2){
    if (!l1 || !l2){
      return l1 ? l1 : l2;
    }
    let newHead = null;
    let current = newHead;
    while (l1 || l2) {
      if (current === null) {
        if (l1.val <= l2.val) {
          current = l1;
          l1 = l1.next;
        } else {
          current = l2;
          l2 = l2.next;
        }
        newHead = current;
      } else {
        if (l1 && (!l2 || l1.val <= l2.val)) {
          current.next = l1;
          l1 = l1.next;
        } else {
          current.next = l2;
          l2 = l2.next;
        }
        current = current.next;
      }
    }
    return newHead;
  }
  // Iterate over lists argument processing two lists at a time until all merged
  let l1 = merge(lists.shift(), lists.shift());
  while (lists.length) {
    let l2 = lists.shift();
    l1 = merge(l1, l2);
  }
  // return new head
  return l1;
};

let testInput = [[1, 4, 5], [1, 3, 4], [2, 6]];
testInput = testInput.map(set => {
  let list = new LinkedList();
  set.forEach(val => list.add(val));
  return list.head;
});

let result = mergeKLists(testInput);
console.log(result);
print(result);
