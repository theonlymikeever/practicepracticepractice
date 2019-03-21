/* 
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

  Input: "Let's take LeetCode contest"
  Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string. 

*/

/**
 * @param {string} s
 * @return {string}
 */

// Fast answer
var reverseWords = function(s) {
  const split = s.split(' ').map(item => {
    return item.split('').reverse('').join(''); // reverse word itself
  }).join(' ');
  return split;
};

const testString = 'Let\'s take LeetCode contest';
const expected = 's\'teL ekat edoCteeL tsetnoc';
const result = reverseWords(testString);
console.log('res:', result);
console.log('correct:', result === expected);
