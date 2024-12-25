// let arr = [2,4,6,8,40,0,60,78];

function largestNumber(arr){
    let maxNumber = arr[0];
    for(let i=0; i<arr.length; i++){
        if(maxNumber < arr[i]){
            maxNumber = arr[i];
        }
    }
    return maxNumber;

}
console.log(largestNumber([2,4,6,8,40,0,60,78]));