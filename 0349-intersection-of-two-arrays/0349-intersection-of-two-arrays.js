/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const s1 = new Set(nums1);
    const s2 = new Set();

    for (const n2 of nums2) {
        if (s1.has(n2)) s2.add(n2);
    }

    return Array.from(s2);
};