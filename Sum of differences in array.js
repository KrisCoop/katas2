// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example: sumOfDifferences([1, 2, 10]) Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0.


//notes:
// so, I will have a single array....
// and, I need to subtract each elements' subsequent element from itself....
// and I need to do this for each index in the array.
// I also need to write for the possible condition of there being an empty array or an array with 1 element, 
// in which case the answer reterned should be zero.
//////   so...
// I will want to loop through the array.....and I have a feeling that the reduce() method will be my friend...
// OKAY:
// I am going to declare a variable called ans, and make it 0 or something.
// I need to use the sort() method (with some tweaks) to put the array in descending order
// I am going to make an 'if' statement, and check to see if numberArray is empty or has only one element. 
//// If either of those things are true, I will say ans = 0
// in the 'else if' statement, I am going to do arr.reduce((tot, e, i, arr) => {e - (arr[i+1])}, initialValue)....and the init value is zero.


function sumOfDifferences(numberArray){

    let ans = null
    numberArray.sort(function(a, b){return b-a})

    console.log(numberArray)

    if ( numberArray === [] || numberArray.length < 2){
        ans = 0
    }
    else {
        ans = numberArray.reduce((tot, e, i, array) => { 
            return tot + (e - (array[i + 1]))
        }, 0)}
    console.log(ans)
    let butts = numberArray.reduce((s, e, i, array) => {
        return s + e - array[i +1]
    }, 0)
    console.log(butts)
    return ans

}

console.log(sumOfDifferences([40, 100, 1, 5, 25, 10]))
// console.log(sumOfDifferences([9]))

/// Best Practices:

// const sumOfDifferences = arr => arr
//   .sort((a, b) => b - a)
//   .map((a, i) => a - arr[i + 1] || 0)
//   .reduce((a, b) => a + b, 0);