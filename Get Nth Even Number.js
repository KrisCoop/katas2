// Return the Nth Even Number

// nthEven(1) //=> 0, the first even number is 0
// nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)

// nthEven(100) //=> 198
// nthEven(1298734) //=> 2597466
// The input will not be 0.

//notes:
// create a for loop 
// (i = 0; arr.length <= n; i++)
// if i%2 === 0, push the i into the array,
// 
////////////////////////////////////////
// function nthEven(n){
//     let arr = [0]

//     for (i = 0; arr.length <= n; i++){
//         if (i % 2 === 0){arr.push(i)}
//     }

//     return arr[arr.length-1]
//   }

/////////// the solution above technically works, but costs too much memory, and fails the tests...a more efficient way is needed (presumably).
//this solution works:

function nthEven(n){
    return (n-1)*2;
  }