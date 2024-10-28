/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n <=2){
    return n;
  }
  let f=1;
  let s=2;
  for(let i=3;i<=n;i++){
    let t= s;
    s=f+s;
    f=t;
  }
  return s;
  };