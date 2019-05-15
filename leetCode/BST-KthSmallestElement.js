/*
  230. Kth Smallest Element in a BST
  https://leetcode.com/problems/kth-smallest-element-in-a-bst/

  Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
  Note:  You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

  Example 1:
    Input: root = [3,1,4,null,2], k = 1
      3
      / \
    1   4
      \
      2
    Output: 1


  Example 2:
    Input: root = [5,3,6,2,4,null,null,1], k = 3
          5
          / \
        3   6
        / \
      2   4
      /
    1
    Output: 3
*/

/**
 * Definition for a binary tree node.
 */
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

 function BST(){
  this.root = null;
 }

 BST.prototype.insert = function(val){
  let newNode = new TreeNode(val);
  if (!this.root) {
    this.root = newNode;
    return this;
  }

  let current = this.root;
  while (current !== null){
    if (val < current.val) {
      if (!current.left) {
        current.left = newNode;
        return this;
      }
      current = current.left
    } else if (val > current.val) {
      if (!current.right) {
        current.right = newNode;
        return this;
      }
      current = current.right;
    };
  }
  return undefined;
}

BST.prototype.DFSPreOrder = function() {
  if (!this.root) return null;
  let values = [];
  function traverse(node) {
    values.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(this.root);
  return values;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  // traverse down the left side and build up a stack of
  // smallest elements, actually performing DFS inOrder
  let smalls = [];
  // DFS In Order
  function traverse(node) {
    if (node.left) traverse(node.left);
    smalls.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  console.log('smalls', smalls)
  return smalls[k - 1];
};


const testInputA = [3,1,4,2];
const testInputB = [5,3,6,2,4,1];
const testInputC = [1,2];

const treeA = new BST();
const treeB = new BST();
const treeC = new BST();

testInputA.forEach(i => treeA.insert(i));
testInputB.forEach(i => treeB.insert(i));
testInputC.forEach(i => treeC.insert(i));

console.log(kthSmallest(treeA.root, 1))
console.log(kthSmallest(treeB.root, 3))
console.log(kthSmallest(treeC.root, 2))
