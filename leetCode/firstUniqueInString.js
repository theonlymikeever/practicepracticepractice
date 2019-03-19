/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let cache = {};
  let res = -1;

  for (let i = 0; i < s.length; i++) {
    const letter = s.charAt(i);
    if (res > -1) break;
    if (cache[letter]) continue;
    if (i === s.length - 1) {
      res = i;
      break;
    }

    cache[letter] = 1;
    const remaining = s.slice(i + 1);
    for (let x = 0; x < remaining.length; x++) {
      const nextLetter = remaining.charAt(x);
      if (letter === nextLetter) break;
      if (x === remaining.length - 1) {
        res = i;
        break;
      }
    }
  }
  return res;
};

const test = [
  {
    input: 'leetcode',
    output: 0
  },
  {
    input: 'loveleetcode',
    output: 2
  },
  {
    input: 'lovelovex',
    output: 8
  },
  {
    input: 'cc',
    output: -1
  }
];

test.forEach(({ input, output }) => {
  console.log(`Inserting ${input}, expecting ${output}`);
  console.log((firstUniqChar(input) === output));
});
