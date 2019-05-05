/*
  Given a binary array, find the maximum number of consecutive 1s in this array.

  Example 1:
    Input: [1,1,0,1,1,1]
    Output: 3
  Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

  Note:
    The input array will only contain 0 and 1.
    The length of input array is a positive integer and will not exceed 10,000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  // edge case: empty array
  if (!nums.length) return 0;
  // multi pointer pattern - back pointer will be starting 1
  let j = 0;
  let tempMax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) tempMax+= 1;
    else {
      j = i; // reset pointer
      tempMax = 0;
    }
    max = Math.max(max, tempMax);
  }
  return max;
};

const testInput = [1,1,0,1,1,1];
const testOutput = 3;
const result = findMaxConsecutiveOnes(testInput);
console.log(result, 'is correct:', result === testOutput);
