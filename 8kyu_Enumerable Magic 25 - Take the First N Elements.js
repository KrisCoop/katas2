// Create a method take that accepts a list/array and a number n, and returns a list/array array 
// of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function take(arr, n) {
    // loop through the array with a standard for loop,
    // only loop to n.length

    // let newArr = []
    // for (i = 0; i < n; i++){
    //     newArr.push(arr[i]) 
    // }
    // return newArr

     // or...just do this shit:
     
    return arr.slice(0, n)


    
    // push each element (up to n) into a new array


    // return the new array


  }