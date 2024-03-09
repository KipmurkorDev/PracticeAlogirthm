/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let results = [];
  if (nums1.length > nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums2[j] === nums1[i]) {
          results.push(nums2[j]);
        }
      }
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[j] === nums2[i]) {
        results.push(nums1[j]);
      }
    }
  }
  console.log(results);
  return Math.min(...results);
};
