/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
 return s.trim().split(/\s+/).filter(segment => segment.length > 0).length;
};