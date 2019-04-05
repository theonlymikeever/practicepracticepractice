/*
  Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
  The digits are stored such that the most significant digit is at the head of the list, and each
  element in the array contain a single digit.
  
  You may assume the integer does not contain any leading zero, except the number 0 itself.

  Example 1:
    Input: [1,2,3]
    Output: [1,2,4]
  Explanation: The array represents the integer 123.

  Example 2:
    Input: [4,3,2,1]
    Output: [4,3,2,2]
  Explanation: The array represents the integer 4321.


  https://leetcode.com/problems/plus-one/
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let result = [...digits];
  // Static case when there is no need for carrying
  if (digits[digits.length - 1] + 1 < 10) {
    result[result.length - 1] = result[result.length - 1] + 1;
  } else {
    // Loop through and move the carry as necessary
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
      const d = digits[i];
      let sum = d + carry;

      if (sum > 9) {
        carry = 1;
        sum = 0;
      } else {
        carry = 0;
      }

      result[i] = sum;
      // If first index needs to hold a carry
      if (i === 0 && carry + d > 9) {
        result[i] = 0;
        result = [1].concat(result);
        break;
      }
    }
  }

  return result;
};

const tests = [
  {
    input: [1, 2, 3],
    output: [1, 2, 4]
  },
  {
    input: [4, 3, 2, 1],
    output: [4, 3, 2, 2]
  },
  {
    input: [4, 9, 9, 9],
    output: [5, 0, 0, 0]
  },
  {
    input: [4, 3, 9, 9],
    output: [4, 4, 0, 0]
  },
  {
    input: [9],
    output: [1, 0]
  },
  {
    input: [2,4,9,3,9],
    output: [2,4,9,4,0]
  }
];

tests.forEach(({input, output}) => {
  const result = plusOne(input);
  console.log(`Result: ${result} | Expected: ${output}`);
});
