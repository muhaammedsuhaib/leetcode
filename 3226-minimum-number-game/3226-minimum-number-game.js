/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b)=>a-b);
      for (let i = 0; i < nums.length; i += 2) {
        if (i + 1 < nums.length) {
            let temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
        }
    }
    return nums;
};