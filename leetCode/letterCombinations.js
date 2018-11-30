/* 
  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

  A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

  Difficulty:
    Medium

  URL:
    https://leetcode.com/problems/letter-combinations-of-a-phone-number/


  Example 1:
    Input: "23"
    Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let numberMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  let numStack = digits.split('');
  let combos = [];
  while(numStack.length) {
    let currentNum = numberMap[numStack.shift()];
    let nextNum = numStack.length ? numberMap[numStack.shift()] : currentNum;
    // console.log(currentNum, nextNum)
    for (let i = 0; i < currentNum.length; i++) {
      // console.log('i', i, currentNum[i])
      for (let x = 0; x < nextNum.length; x++) {
        combos.push(currentNum[i] + nextNum[x]);
      }
    }
  }
  return combos;
};


console.log(letterCombinations('23'));
//["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].