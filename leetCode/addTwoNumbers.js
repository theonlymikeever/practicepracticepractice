// for testing:
function createDeepList(val){
  let split = Array.isArray(val) 
            ? val
            : String(val).split('');
  let list = new ListNode(split.pop()); // first node
  let currentNode = list;
  while (split.length){
    currentNode.next = new ListNode(split.pop());
    currentNode = currentNode.next;
  }
  return list;
};let v = createDeepList([2,4,3])
let x = createDeepList([5,6,4])
addTwoNumbers(v, x)


var addTwoNumbers = function(l1, l2) {
    var l1p = l1; // list 1 pointer
    var l2p = l2; // list 2 pointer

    var prev = new ListNode(null);
    var prevp = prev; // prev pointer
    var carry = false;
    while(l1p || l2p) {
        var curr = l1p != null ? l1p : l2p;
        var val1 = l1p != null ? l1p.val : 0;
        var val2 = l2p != null ? l2p.val : 0;
        var val3 = carry ? 1:0;
        var sum = val1 + val2 + val3;
        if(sum > 9) {
            sum = sum - 10;
            carry = true;
        } else {
            carry = false;
        }
        curr.val = sum;
        prevp.next = curr;
        prevp = prevp.next;
        if(l1p) l1p = l1p.next;
        if(l2p) l2p = l2p.next;
    }
    if(carry) {
        prevp.next = new ListNode(1);
    }   
    return prev.next;
};


let v = createDeepList([2,4,3])
let x = createDeepList([5,6,4])
addTwoNumbers(v, x)

/*

ListNode {
  val: 2,
  next: ListNode { val: 4, next: ListNode { val: 3, next: null } } }


*/