// Complete the square sum function so that it squares each number 
// passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

let numbers = [1, 2, 2];

function squareSum(numbers){
    return numbers.reduce((sum, e)=>{
        return sum + (e*e)
    },0)
}

// function squareSum(numbers){
//     return numbers.reduce((s, e) => {
//         return s + (e*e)
//     }, 0)
// }

// // function squareSum(numbers){
// // //   let squared = numbers.map(x => x^2);
// // //   return squared;  
// // for (i = 0; i < numbers.length; i++) {
// //         return Math.pow(numbers[i], 2);
// //     }
// }

// function squareSum(numbers){
//     // const doubleandSquareandSum = arr => arr.reduce((a, num) => a + ((2 * num) ** 2), 0);
//     let squareItSumIt = numbers => numbers.reduce((a, num) => a + ((2 * num) ** 2), 0);
//     return squareItSumIt;
// }

console.log(squareSum(numbers))


// Math.pow(arr[i],2);
// Test.assertEquals(squareSum([1,2]), 5)
// Test.assertEquals(squareSum([0, 3, 4, 5]), 50)