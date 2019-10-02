// Summation
// Write a program that finds the summation of every number from 1 to num. The number 
// will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


// notes:
// I will be given a number, not an array. So I need to find a way to turn the number...maybe a for loop?
// declare a variable for tracking the sum number, which I will want to return later.
// loop from 'i = 1' to 'i <= num', 
// for each number in the loop, do sum += num


var summation = function(num){

    let sum = 0

    for (i = 1; i <= num; i++){
        sum += i
    }
    console.log(sum)

    return sum

}

console.log(summation(5))


/// here's a clever way some other person solved it:

const summation = n => n * (n + 1) / 2;