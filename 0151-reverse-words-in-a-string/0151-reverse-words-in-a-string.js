/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let c
    return c= s.split(/\s+/).reverse().join(' ').trim();
};