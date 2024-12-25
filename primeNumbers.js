function isPrime(num){
    if(num <=1) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num %i ===0){
            return false;
        }
    }
    return true
}

function primeNumbers(numbers){
    // let result = [];
    // for(let num of numbers){
    //     if(isPrime(num)){
    //         result.push(num)
    //     }
    // }
    return numbers.filter(isPrime)
    // return result
}

console.log(primeNumbers([5,7,10,79,40,50]))