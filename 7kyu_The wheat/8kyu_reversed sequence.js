// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {

    arr = [1]

    for (i = 1; i < n; i++){
        arr.push(i + 1)
    }
    arr = arr.reverse()

    console.log(arr)

    return arr
  };

  // or you can do the for loop in reverse:
//   const reverseSeq = n => {
//     let arr = [];
//       for (let i=n; i>0; i--) {
//         arr.push(i);
//         } return arr;
//     };

console.log(reverseSeq(5), [5, 4, 3, 2, 1])