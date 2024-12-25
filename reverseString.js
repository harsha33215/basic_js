// let str = "harsha"; // method -1
// let result = "";
// for(let i=0; i<str.length;i++){
//     result = str[i] + result;
// }
// console.log(result);

function reverseString(str){
    // return str.split('').reverse().join('') // method - 2
    let result ="";
    for(let i=0; i<str.length;i++){
        result = str[i] + result;
    }
    return result;
}
console.log(reverseString('harsha'))
