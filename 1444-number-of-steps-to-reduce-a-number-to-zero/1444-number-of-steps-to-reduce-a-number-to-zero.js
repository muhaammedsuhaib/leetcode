/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let cou=0;

    while(num>0){
        if(num%2==0){
            num/=2;
        }else{
            num -=1;
        }
        cou++;
    }
   return cou;
};