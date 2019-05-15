/*
   Range Sum of BST
    https://leetcode.com/problems/range-sum-of-bst/

  Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
  The binary search tree is guaranteed to have unique values.

  Example 1:
    Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
    Output: 32

  Example 2:
    Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
    Output: 23

*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let current;
  let vals = [];
  let queue = [];
  queue.push(root);
  while (queue.length && current !== null) {
    current = queue.shift();
    if (current.val >= L && current.val <= R) vals.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return vals.reduce((a,b) => a+b, 0);
};


function buildTest() {
  let nodes = [10,5,15,3,7,18];
  let root = new TreeNode(nodes.shift());
  root.left = new TreeNode(nodes.shift());
  root.right = new TreeNode(nodes.shift());
  root.left.left = new TreeNode(nodes.shift());
  root.left.right = new TreeNode(nodes.shift());
  root.right.right = new TreeNode(nodes.shift());
  return root;
}

const tree = buildTest();
console.log((rangeSumBST(tree, 7, 15)));