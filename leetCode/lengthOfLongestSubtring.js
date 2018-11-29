/*
  
  Longest Substring Without Repeating Characters


  Difficulty:
    Medium
  URL:
    https://leetcode.com/problems/longest-substring-without-repeating-characters/


  Problem:
    Given a string, find the length of the longest substring without repeating characters


  Test Cases:

    Example 1
      Input: "abcabcbb"
      Output: 3 
      Explanation: The answer is "abc", with the length of 3. 

    Example 2
      Input: "bbbbb"
      Output: 1
      Explanation: The answer is "b", with the length of 1.

    Example 3
      Input: "pwwkew"
      Output: 3
      Explanation: The answer is "wke", with the length of 3. 
                   Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/


/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let str = s.split('');
  let sub = [];
  let longest = sub.length;
  while (str.length) {
    let letter = str.shift(); // pull off stack
    let exists = sub.indexOf(letter); // see if it exists
    if (exists > -1) {
      // update longest, remove duplicate from substring
      longest = longest > sub.length ? longest : sub.length;
      sub = sub.slice(exists+1).concat(letter);
    } else {
      sub.push(letter);
    }
  }
  longest = longest > sub.length ? longest : sub.length;
  return longest;
};
