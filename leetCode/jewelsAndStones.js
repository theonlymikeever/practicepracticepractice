/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  // let res = 0;
  const stones = S.split('');
  return J.split('').map(jewel => {
    let jewelsCount = stones.filter(i => i === jewel);
    return jewelsCount.length;
  }).reduce((a, b) => a + b, 0);
};

const tests = [
  {
    j: 'aA',
    s: 'aAAbbbb',
    output: 3
  },
  {
    j: 'z',
    s: 'ZZ',
    output: 0
  }
];

tests.forEach(({j, s, output}) => {
  const result = numJewelsInStones(j, s);
  console.log(`Testing ${j} in ${s}: ${result}`);
  console.log(`${result === output ? 'Correct!' : 'INCORRECT!!'}`);
})