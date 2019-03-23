/* eslint-disable complexity */
// ^ Gotta make this solution better ;P
/*
  There are two sorted arrays nums1 and nums2 of size m and n respectively.
  Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
  You may assume nums1 and nums2 cannot be both empty.

  Example 1:
    nums1 = [1, 3]
    nums2 = [2]

    The median is 2.0

    Example 2:
      nums1 = [1, 2]
      nums2 = [3, 4]

      The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const allNums = [];
  const totalLength = nums1.length + nums2.length;
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < totalLength; i++) {
    // Handle one list shorter than the other;
    let n1 = nums1[p1];
    let n2 = nums2[p2];
    if (!n1 && !n2) break;
    if (n2 === undefined || n1 < n2) {
      allNums.push(n1);
      p1 += 1;
    } else if (n1 === undefined || n2 < n1) {
      allNums.push(n2);
      p2 += 1;
    } else {
      // they equal! push both
      allNums.push(n1);
      allNums.push(n2);
      p1 += 1;
      p2 += 1;
    }
  }
  let median;
  let middleIndex = Math.floor(allNums.length / 2);
  let isOdd = allNums.length % 2;
  if (isOdd) {
    median = allNums[middleIndex];
  } else {
    median = (allNums[middleIndex - 1] + allNums[middleIndex]) / 2;
  }
  return median;
};

// the other approach is to use two pointers and move along based on the weight of each num;

const setOne = [[1, 3], [2]];
const setTwo = [[1, 2], [3, 4]];
const setThree = [[1, 2, 6, 9], [1, 3, 4, 10, 15, 20]];
const setFour = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], [0,6]];

console.log(findMedianSortedArrays(...setOne)); // 2
console.log(findMedianSortedArrays(...setTwo)); // 2.5
console.log(findMedianSortedArrays(...setThree)); // 5
console.log(findMedianSortedArrays(...setFour)); // 10.5
