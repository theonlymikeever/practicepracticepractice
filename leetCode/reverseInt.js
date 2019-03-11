/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const answer = x
    .toString()
    .split('')
    .reduceRight((acc, curr) => {
      if (curr === '-') {
        return acc * -1;
      }
      return parseInt(acc + curr);
    }, 0);
  // Account for '..only hold integers within the 32-bit signed integer range'
  if (answer > Math.pow(2, 31) - 1 || answer < Math.pow(2, 31) * -1) return 0;
  return answer;
};

const tests = [
  {
    input: 123,
    output: 321
  },
  {
    input: -123,
    output: -321
  },
  {
    input: 120,
    output: 21
  },
  {
    input: 1534236469,
    output: 0
  },
  {
    input: -2147483648,
    output: 0
  }
];

tests.forEach(({ input, output }) => {
  console.log(reverse(input, output));
});
