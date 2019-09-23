// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

/////notes:
// using the higher order filter() method, cycle through the parameter array twice, each time creating a new array (one for positives, one for negatives)
// we now have 2 new arrays, one pos, one neg. 
// declare a new variable for the positives, which = the array.length
// declare another new variable, representing the sum of negative #'s.
// use the reduce() method to sum the elements of the negative #'s array.

//finally, create a third Array, and make the first index be the value of the pos #'s variable, and the 2nd the neg #'s variable
//////return this third array.



function countPositivesSumNegatives(input) {
    let posArr = []
    let negArr = []

    posArr = input.filter((e) => {
        return e > 0
    })
   // two ways to write the arrow function.
    negArr = input.filter((e) => e < 0)
}