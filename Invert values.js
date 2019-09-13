// Given a set of numbers, return the additive inverse of each. Each positive becomes 
// negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.
//==================================================================
//something I found:
// Math.abs(num) => Always positive
// -Math.abs(num) => Always negative
//const map1 = array1.map(x => x * 2);

//notes: 
// create an empty array to push the modified numbers into
// make a for loop, and loop through each element
// use an if statement to determine if the number element is positive or negative.
// if the number is positive, use -Math.abs(array[i]) to reverse it and push it into the new array.
// if the number is negative, use Math.abs(array[i]) to reverse it and push it into the new array.
// Or... Sarah just reminded me that if I multiply any number by negative 1 it just reverses, so... I think I'll just do that :) 
// return the new array.

function invert(array) {   
    return array.map(x => x * -1)
 }

