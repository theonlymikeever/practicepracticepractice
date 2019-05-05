/*
  https://leetcode.com/problems/minimum-window-substring/
  Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

  Example:
    Input: S = "ADOBECODEBANC", T = "ABC"
    Output: "BANC"

  Note:
    If there is no such window in S that covers all characters in T, return the empty string "".
    If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let window = '';
  // edge case: empty string or empty sub or shorter string than sub
  if (s.length < t.length || !s.length || !t.length) return window;
  // Map of all charters we need to attribute and length of sub
  let map = {};
  for (let i = 0; i < t.length; i++) {
    map[t[i]] = (map[t[i]] || 0) + 1;
  }
  let requiredSize = Object.keys(map).length;

  // Left and right pointers for window
  let p1 = 0;
  let p2 = -1;
  // Loop through until right pointer hits end
  while (p2 < s.length) {
    if (requiredSize === 0) {
      // we've met requirements for substring - update window
      if (!window || p2 - p1 + 1 < window.length) {
        window = s.slice(p1, p2 + 1);
      }
      // remove from map and shift left pointer
      if (map[s[p1]] !== undefined) {
        map[s[p1]] += 1;
      }
      if (map[s[p1]] > 0) {
        requiredSize += 1;
      }
      p1 += 1;
    } else {
      // window does not contain all of t, must move p2
      p2 += 1;
      if (map[s[p2]] !== undefined) {
        map[s[p2]] -= 1;
      }
      if (map[s[p2]] === 0) {
        requiredSize -= 1;
      }
    }
  }
  return window;
};

const testInput = {
  s: 'ADOBECODEBANC',
  t: 'ABC'
};
const expectedOutput = 'BANC';
const result = minWindow(testInput.s, testInput.t);

console.log('result:', result, 'is correct:', result === expectedOutput);
