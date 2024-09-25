/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let num2= [...new Set(nums)];
    return nums.length !==num2.length;
};