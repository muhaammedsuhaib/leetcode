/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
const words = s.trim().split(' ');
let r=words[words.length-1];
return r.length
};