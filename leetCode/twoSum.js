var twoSum = function(nums, target) {
  let indices = [];

  for (var i = 0; i < nums.length - 1; i++) {
    for (var x = i+1; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) {
        indices = [i, x];
        break;
      }
    }
    if (indices.length > 0) break;
  }

  return indices; 
};

twoSum([2, 7, 11, 15], 9) // return [0, 1]