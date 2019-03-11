/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let x = i+1; x < nums.length; x++) {
      // console.log('adding', nums[i], '+', nums[x])
      if (nums[i] + nums[x] === target) {
        res = [i, x];
        break;
      }
    }
    if (res.length) break;
  }
  return res;
};

const tests = [
  {
    nums: [2, 7, 11, 15],
    target: 9
  },
  {
    nums: [3, 2, 4],
    target: 6
  },
  {
    nums: [33, 9, 19, 20, 50, 100, 30, 45],
    target: 80
  }
];

tests.forEach(({ nums, target }) => {
  console.log(twoSum(nums, target));
});
