/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
     let v=s.split(' ');
let res='';
let sp=' ';
for(let i=0;i<k;i++){
    res += v[i];
      if(i<k-1){
     res+=sp;
 }
}
return res;
};