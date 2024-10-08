/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let a= (n*(n+1)/2);
    let c = nums.reduce((a,c)=>a+c);
    return a-c;
};