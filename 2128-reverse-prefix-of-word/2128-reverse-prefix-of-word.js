/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let rv='';
let num = word.indexOf(ch);
for(let i =0;i<=num;i++){
    rv+= word[i];
}
val=rv.split('').reverse().join('');
for(let j=num+1 ;j<word.length;j++){
    val+=word[j]
}
return val
};