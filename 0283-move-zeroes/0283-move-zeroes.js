/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var a =0
    for(let i=0;i<nums.length;i++){
        if(nums[i] !==0){
            nums[a]=nums[i]
            a++
        }
    }

    for(let i = a;i<nums.length;i++){
        nums[i]=0
    }
    return nums
};