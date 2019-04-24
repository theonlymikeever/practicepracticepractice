/* 
  Majority Element
    https://leetcode.com/problems/majority-element/


  Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
  You may assume that the array is non-empty and the majority element always exist in the array.

  Example 1:
    Input: [3,2,3]
    Output: 3

  Example 2:
    Input: [2,2,1,1,1,2,2]
    Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // Account for edge: single input array
  if (nums.length === 1) return nums[0];

  let record = {};
  let majority = nums[0];

  for (let idx = 0; idx < nums.length; idx++) {
    const n = nums[idx];
    record[n] = record[n] || 0; // pull value or initialize at 0
    record[n] += 1; // increase count for n
    if (record[n] > Math.floor(nums.length/2)) {
      majority = n;
      break;
    }
  }
  
  return majority;
};

const tests = [
  {
    input: [3, 2, 3],
    output: 3
  },
  {
    input: [2, 2, 1, 1, 1, 2, 2],
    output: 2
  },
  {
    input: [5],
    output: 5
  },
  {
    input: [5,5,6,7,6,6,6],
    output: 6
  },
  {
    input: [1,3,3,3],
    output: 3
  }
];

tests.forEach(({input, output}) => {
  let result = majorityElement(input);
  console.log('inputting:', input, 'result:', result);
  console.log('is correct:', result === output);
});
