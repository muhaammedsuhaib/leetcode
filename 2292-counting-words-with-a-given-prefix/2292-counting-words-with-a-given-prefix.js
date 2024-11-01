/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
   var count=0;
    for(let w of words){
        if(w.startsWith(pref)){
            count ++;
        }
    }
    return count;
};