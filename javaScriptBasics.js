// spread operator
// let arr = [1,2,3,4]
// let arr2 = [...arr, 5,6]
// console.log(arr2);

// copy of array using spread operator

// let arr1 = [4,7,9,8];
// let arr2 = [1,7,93,4];

// let arr3 = [...arr1,...arr2];
// console.log(arr3);

//  spread operator with objects

// let person = {
//     name:"harsha",
//     age: 27,
//     habits: "playing cricket"
// }
// let personDetails = {...person,location: "Nellore"}

// console.log(personDetails)

//with function calls

// function sumOfNumbers(a, b, c, d) {
//   return a + b + c + d;
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(sumOfNumbers(...numbers));


// function numbers(...args){
//   console.log(args);
// }
// numbers(1,2,3);

let  [a,b,c,...rest] = [1,2,3,4,5,6,7];
console.log(a);
console.log(b)
console.log(rest);