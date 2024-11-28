/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
       const stack = [];
    const pair = { '(': ')', '{': '}', '[': ']' };
    
    for (let char of s) {
        
        if (pair[char]) {
            stack.push(char);
        } else {
            if (pair[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;

};