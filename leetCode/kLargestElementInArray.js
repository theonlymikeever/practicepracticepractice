/*
  Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

    Example 1:
      Input: [3,2,1,5,6,4] and k = 2
      Output: 5

    Example 2:
      Input: [3,2,3,1,2,4,5,5,6] and k = 4
      Output: 4

  Note:
  You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Fast answer
var findKthLargest = function(nums, k) {
  const sorted = nums.sort((a,b) => b - a);
  return sorted[k - 1];
};

var findKthLargest2 = function(nums, k) {
  // reverse sort the array (bubble)
  let swapping;
  do {
    swapping = false;
    for (let i =  nums.length; i > 0; i--) {
      if (nums[i] && nums[i - 1] && nums[i] > nums[i - 1]) {
        // swap!
        let temp = nums[i];
        nums[i] = nums[i - 1];
        nums[i - 1] = temp;
        swapping = true;
      }
    }
  } while (swapping);
  console.log(nums)
  return nums[k - 1];
};

const tests = [
  {
    input: [3,2,1,5,6,4],
    k: 2,
    output: 5
  },
  {
    input: [3,2,3,1,2,4,5,5,6],
    k: 4,
    output: 4
  },
  {
    input: [-1,2,0],
    k: 1,
    output: 2
  },
  {
    input: [-1,2,0],
    k: 2,
    output: 0
  }
];

tests.forEach(({input, k, output}) => {
  const fast = findKthLargest(input, k);
  const long = findKthLargest2(input, k);
  console.log(`Answer with fast solution: ${fast} - ${fast === output ? 'Correct!' : 'WRONG!'}`);
  console.log(`Answer with long solution: ${long} - ${long === output ? 'Correct!' : 'WRONG!'}`);
});
