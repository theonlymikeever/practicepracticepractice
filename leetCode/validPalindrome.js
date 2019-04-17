/*

  Valid Palindrome
    https://leetcode.com/problems/valid-palindrome/

  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
  Note: For the purpose of this problem, we define empty string as valid palindrome.

  Example 1:
    Input: "A man, a plan, a canal: Panama"
    Output: true

  Example 2:
    Input: "race a car"
    Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // function to ensure is alphanumeric letter (lower case)
  function isValid(c) {
    var code = c.charCodeAt(0);
    // Looks for bounds 0-9 or a-z (lower)
    if ((code > 47 && code < 58) || (code >= 97 && code <= 122)) {
      return true;
    }
    return  false;
  }
  // Iterate over to cleanse string
  var cleanStr = '';
  for (let i = 0; i < s.length; i++) {
    var char = s.charAt(i).toLowerCase();
    if (isValid(char)) {
      cleanStr += char;
    }
  }
  // Create two pointers, one on each end
  let x = 0;
  let y = cleanStr.length - 1;
  // iterate from left and from to right (in reverse)
  while (x < y) {
    let l1 = cleanStr.charAt(x);
    let l2 = cleanStr.charAt(y);
    if (l1 === l2) {
      x++;
      y--;
    } else {
      // when a letter mismatches, return false
      return false;
    }
  }
  // once points meet, if match, return true
  return true;
};

const tests = [
  {
    input: 'A man, a plan, a canal: Panama',
    output: true
  },
  {
    input: 'race a car',
    output: false
  },
  {
    input: 'racecar',
    output: true
  },
  {
    input: 'nurses run',
    output: true
  },
  {
    input: 'pi',
    output: false
  },
  {
    input: 'a.',
    output: true
  },
  {
    input: '0P',
    output: false
  },
  {
    input: '',
    output: true
  },
  {
    input: '.',
    output: true
  }
];

tests.forEach(({input, output}) => {
  let result = isPalindrome(input);
  console.log('inputting:', input);
  console.log('is correct:', result === output);
  console.log('\n');
});
