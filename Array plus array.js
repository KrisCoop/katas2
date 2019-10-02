// I'm new to coding and now I want to get the sum of two arrays...actually 
// the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


//notes:
// I think I want to try using reduce() on the first array, to sum the elements inside it,
// then I want to do the same exact thing to array #2
// then I will just sum and return the results of each array with the reduce thingy.

function arrayPlusArray(arr1, arr2) {

    return arr1.reduce((tot, e, i) => tot += e ,0) + arr2.reduce((tot, e, i) => tot += e ,0)

    // let sum1 = arr1.reduce((tot, e, i) => tot += e ,0)
    // let sum2 = arr2.reduce((tot, e, i) => tot += e ,0)
    // let ans = sum1 + sum2
    // return ans
  }


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);