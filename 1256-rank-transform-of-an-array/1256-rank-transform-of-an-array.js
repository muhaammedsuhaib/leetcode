/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sortArry= [... new Set(arr)].sort((a,b)=> a-b);

    let rankMap ={};
    for(let i=0 ; i<sortArry.length;i++){
        rankMap[sortArry[i]] = i+1;
    };

    return arr.map(num => rankMap[num])
};