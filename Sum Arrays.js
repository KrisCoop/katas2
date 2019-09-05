// Write a method sum (sum_array in python, SumArray in C#) that takes an array of numbers and returns the sum of the numbers. 
// These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array 
// does not contain any numbers then you should return 0.

// Sum Numbers
let numbers = [1, 2, 3, 4, 5];

function sum(numbers) {
    
    return numbers.length > 0 ? numbers.reduce((a,b)=>a+b, 0) : 0;
  
};
console.log(sum(numbers))


//////example on stack overflow:
// const sum = [1, 2, 3].reduce(add);

// function add(accumulator, a) {
//     return accumulator + a;
// }

// console.log(sum); // 6