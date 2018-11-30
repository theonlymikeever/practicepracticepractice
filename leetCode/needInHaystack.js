/* 
  Implement strStr().
  Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

  Difficulty:
    East

  URL:
    https://leetcode.com/problems/implement-strstr/


  Example 1:
    Input: haystack = "hello", needle = "ll"
    Output: 2
  Example 2:
    Input: haystack = "aaaaa", needle = "bba"
    Output: -1
*/



/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) return 0; // empty string;
  let maxLength = haystack.length - needle.length + 1;
  for (let i = 0; i < maxLength; i++) {
    // check flat out needle to avoid second loop
    let str = haystack.slice(i, i + needle.length);
    if (str === needle) return i;
  }
  // item is not found
  return -1;
}

strStr('hello', 'll') // 2
strStr('hello', 'xx') // -1
strStr("mississippi", "issip") // watch it!