/* 

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let indices = [];

  for (var i = 0; i < nums.length - 1; i++) {
    for (var x = i+1; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) {
        indices = [i, x];
        break;
      }
    }
    if (indices.length > 0) break;
  }

  return indices; 
};

const inputA = [2, 7, 11, 15];
const inputB = 9;
const result = twoSum(inputA, inputB);

console.log('res:', result); // expecting [0, 1];