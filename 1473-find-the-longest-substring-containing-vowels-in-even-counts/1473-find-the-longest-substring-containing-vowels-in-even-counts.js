/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
        const vowelToBit = { 'a': 1, 'e': 2, 'i': 4, 'o': 8, 'u': 16 };

    let bitmask = 0;
    
    const seen = { 0: -1 };  
    
    let maxLength = 0;
   

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char in vowelToBit) {
            bitmask ^= vowelToBit[char];
        }
        if (bitmask in seen) {
            maxLength = Math.max(maxLength, i - seen[bitmask]);
        } else {
            seen[bitmask] = i; 
            bitmask
        }
    }

    return maxLength
};