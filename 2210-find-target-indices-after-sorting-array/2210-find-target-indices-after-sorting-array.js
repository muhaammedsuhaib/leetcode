/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let sortval = nums.sort((a, b) => a - b);

let res = [];
for (let i = 0; i <= nums.length; i++) {
  if (nums[i] === target) {
    res.push(i);
  }
}

return res;

};