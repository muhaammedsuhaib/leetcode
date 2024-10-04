/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let pos=0, val='',rval='',che='';
  
    
   for(let i=0;i<word.length;i++){
    if(word[i] === ch){
       pos+=i;
       for(let j=0;j<=pos;j++){
        val+= word[j];
        rval=val.split('').reverse().join('');
}
for(let k=pos+1; k<word.length;k++){
    rval+=word[k];
}
     return rval;
       break ;
    }else{
       che+=word[i];
    }


}
 if(che===word) return word;
};