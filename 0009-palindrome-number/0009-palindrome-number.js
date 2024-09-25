/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   const str = x.toString();
   const revers = str.split('').reverse().join('');
   return str===revers;

};