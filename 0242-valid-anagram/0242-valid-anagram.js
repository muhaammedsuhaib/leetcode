/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let result1 = s.split("").sort().join("");
    let result2 = t.split("").sort().join("");
    return result1 === result2;
    
};