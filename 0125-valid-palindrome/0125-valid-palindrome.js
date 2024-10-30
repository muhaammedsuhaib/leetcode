/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let convertstr = s.toLowerCase();
let str1 = convertstr.replace(/[^a-z0-9]/g, ""); 
let str2= str1.split('').reverse().join('');
return str1=== str2;
};