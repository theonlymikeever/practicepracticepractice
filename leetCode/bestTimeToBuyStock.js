/*
  Say you have an array for which the ith element is the price of a given stock on day i.

  If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

  Note that you cannot sell a stock before you buy one.

  Example 1:
    Input: [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
                Not 7-1 = 6, as selling price needs to be larger than buying price.

  Example 2:
    Input: [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  for (let x = 0; x < prices.length -1 ; x++) {
    if (prices[x] > prices[x + 1]) continue //skip iteration
    for (let y = x; y < prices.length; y++) {
      let profit = prices[y] - prices[x];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

const tests = [
  {
    input:[7,1,5,3,6,4],
    output: 5
  },
  {
    input: [3,1],
    output: 0
  },
  {
    input: [7,6,9,28,4,3,1],
    output: 22
  },
  {
    input: [7,6,4,3,1],
    output: 0
  },
];

tests.forEach(({ input, output }) => {
  const result = maxProfit(input);
  console.log(`Testing: ${input}`);
  console.log(`Results: ${result}`)
  console.log(`Correct: ${result === output}`);
  console.log('\n')
});
